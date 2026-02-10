'use client';

import { useState, useEffect } from 'react';
import { curriculum, Subject } from './data'; 

export default function Home() {
  // --- STATE ---
  const [selectedMajor, setSelectedMajor] = useState<string>('biology');
  const [selectedYear, setSelectedYear] = useState<string>('L1');
  const [selectedSemester, setSelectedSemester] = useState<string>('S1');
  const [view, setView] = useState<'home' | 'calculator'>('home');
  const [showResult, setShowResult] = useState(false);
  const [grades, setGrades] = useState<Record<string, number>>({});
  const [finalScore, setFinalScore] = useState<number>(0);

  // --- HELPERS (With Safety Checks) ---
  // Fallback to biology if selection is invalid
  const currentMajor = curriculum[selectedMajor] || curriculum['biology'] || Object.values(curriculum)[0];
  
  if (!currentMajor) {
    return <div className="p-10 text-center">Error: Major data not found. Please check data.ts</div>;
  }

  const yearsList = Object.keys(currentMajor.years);
  const showYearSelector = yearsList.length > 1;

  // Ensure selectedYear exists
  const safeYear = currentMajor.years[selectedYear] ? selectedYear : yearsList[0];
  
  const rawSemesters = Object.keys(currentMajor.years[safeYear] || {});
  const semestersList = rawSemesters.length > 1 
    ? [...rawSemesters, "Annual (S1 + S2)"] 
    : rawSemesters;

  // Ensure selectedSemester exists
  const safeSemester = (semestersList.includes(selectedSemester) || selectedSemester === "Annual (S1 + S2)")
    ? selectedSemester 
    : rawSemesters[0];

  let subjects: Subject[] = [];
  if (safeSemester === "Annual (S1 + S2)") {
    rawSemesters.forEach(sem => {
      const semSubjects = currentMajor.years[safeYear]?.[sem] || [];
      subjects = [...subjects, ...semSubjects];
    });
  } else {
    subjects = currentMajor.years[safeYear]?.[safeSemester] || [];
  }

  // --- HANDLERS ---
  const handleMajorChange = (majorKey: string) => {
    setSelectedMajor(majorKey);
    const newMajor = curriculum[majorKey];
    if (newMajor) {
      const newYears = Object.keys(newMajor.years);
      const firstYear = newYears[0];
      const firstSem = Object.keys(newMajor.years[firstYear])[0];
      setSelectedYear(firstYear);
      setSelectedSemester(firstSem);
    }
  };

  const handleGradeChange = (code: string, value: string) => {
    let num = parseFloat(value);
    if (num > 100) num = 100;
    if (num < 0) num = 0;
    setGrades((prev) => ({ ...prev, [code]: isNaN(num) ? 0 : num }));
  };

  const calculateResult = () => {
    let totalWeighted = 0;
    let totalCredits = 0;
    subjects.forEach((sub) => {
      const grade = grades[sub.code] || 0;
      totalWeighted += grade * sub.credits;
      totalCredits += sub.credits;
    });
    if (totalCredits > 0) {
      const resultOn20 = (totalWeighted / totalCredits) / 5;
      setFinalScore(resultOn20);
      setShowResult(true);
    }
  };

  const resetCalculator = () => {
    setShowResult(false);
    setView('home');
    setGrades({});
  };

  // --- RENDER ---
  return (
    <>
      {/* === VIEW 1: HOME SELECTION === */}
      {view === 'home' && (
        <div className="page-section">
          
          <img src="/logo.png" alt="Logo" className="hero-logo" />
          
          <div className="hero-text">
            <h1>Faculty Grade Tool</h1>
            <p>Official Grade Simulator for the Faculty of Sciences.</p>
          </div>

          {/* --- UPDATED ABOUT CARD --- */}
          <div className="card" style={{ borderLeft: '4px solid var(--accent)', padding: '20px' }}>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '1rem', color: 'var(--primary)' }}>About this Tool</h3>
            <p style={{ margin: '0 0 12px 0', fontSize: '0.85rem', color: 'var(--text-gray)', lineHeight: 1.5 }}>
              Calculate your semester or annual average (GPA). Select "Annual" to simulate your full year result.
            </p>
            
            {/* Arabic Signature Section */}
            <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '10px', marginTop: '10px' }}>
              <p style={{ margin: 0, fontSize: '0.9rem', fontWeight: 'bold', color: '#15803d' }}>
                تقدمة شعبة كلية العلوم
              </p>
              <p style={{ margin: '4px 0 0 0', fontSize: '0.85rem', color: '#15803d' }}>
                #خدمتكم_شرف_لنا 💚
              </p>
            </div>
          </div>

          <div className="card">
            <div className="input-group">
              <label>Select Major</label>
              <select value={selectedMajor} onChange={(e) => handleMajorChange(e.target.value)}>
                {Object.keys(curriculum).map((key) => (
                  <option key={key} value={key}>{curriculum[key].name}</option>
                ))}
              </select>
            </div>
            
            {showYearSelector && (
              <div className="input-group">
                <label>Select Year</label>
                <select value={safeYear} onChange={(e) => setSelectedYear(e.target.value)}>
                  {yearsList.map((year) => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            )}

            <div className="input-group">
              <label>Select Period</label>
              <select value={safeSemester} onChange={(e) => setSelectedSemester(e.target.value)}>
                {semestersList.map((sem) => (
                  <option key={sem} value={sem}>{sem}</option>
                ))}
              </select>
            </div>

            <button className="btn btn-primary" onClick={() => setView('calculator')}>
              Start Calculation
            </button>
          </div>
        </div>
      )}

      {/* === VIEW 2: CALCULATOR === */}
      {view === 'calculator' && (
        <div className="page-section">
          
          <div className="calc-header">
            <img src="/logo.png" className="mini-logo" alt="logo" />
            <div>
              <h2 style={{ margin: 0, fontSize: '1rem', color: 'var(--primary)' }}>{currentMajor.name}</h2>
              <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-gray)' }}>{safeYear} - {safeSemester}</p>
            </div>
          </div>

          <div className="subject-list" style={{ marginBottom: '100px' }}>
            {subjects.map((sub) => (
              <div key={sub.code} className="subject-item">
                <div className="sub-details">
                  <div className="sub-badges">
                    <span className="sub-code">{sub.code}</span>
                    <span className="sub-credits">Credits: {sub.credits}</span>
                  </div>
                  <span className="sub-name">{sub.name}</span>
                </div>
                <div className="grade-input-wrapper">
                  <input 
                    type="number" 
                    className="grade-input" 
                    placeholder="-" 
                    inputMode="decimal"
                    value={grades[sub.code] === 0 ? '' : grades[sub.code]}
                    onChange={(e) => handleGradeChange(sub.code, e.target.value)}
                  />
                  <div className="input-hint">/ 100</div>
                </div>
              </div>
            ))}
             {subjects.length === 0 && (
                 <p style={{textAlign:'center', color:'#999', marginTop: '20px'}}>No subjects found for this selection.</p>
              )}
          </div>

          <div style={{ 
            position: 'fixed', 
            bottom: '20px', 
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'calc(100% - 32px)',
            maxWidth: '480px',
            backgroundColor: 'white',
            padding: '12px 16px', 
            borderRadius: '16px',
            boxShadow: '0 10px 25px -5px rgba(0,0,0,0.15), 0 4px 10px -3px rgba(0,0,0,0.1)',
            border: '1px solid #e2e8f0',
            zIndex: 50,
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <button 
              className="btn btn-outline" 
              style={{ margin: 0, border: 'none', background: '#f1f5f9', color: '#64748b', flex: '1' }}
              onClick={() => setView('home')}
            >
              Cancel
            </button>
            <button 
              className="btn btn-primary" 
              style={{ flex: '2', boxShadow: 'none' }}
              onClick={calculateResult}
            >
              Show Results
            </button>
          </div>
        </div>
      )}

      {/* === VIEW 3: RESULT OVERLAY === */}
      {showResult && (
        <div className="result-overlay">
          <div className="result-card">
            <h2 style={{ margin: '0 0 20px 0', color: 'var(--text-dark)' }}>
              {safeSemester.includes("Annual") ? "Annual Result" : "Semester Result"}
            </h2>
            
            <div className="score-circle" style={{ borderColor: finalScore >= 10 ? 'var(--secondary)' : 'var(--primary)' }}>
              <span className="final-score" style={{ color: finalScore >= 10 ? 'var(--secondary)' : 'var(--primary)' }}>
                {finalScore.toFixed(2)}
              </span>
              <span className="score-label">OUT OF 20</span>
            </div>

            <div className={`status-badge ${finalScore >= 10 ? 'pass' : 'fail'}`}>
              {finalScore >= 10 ? 'PASSING' : 'FAILING'}
            </div>

            <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '25px', lineHeight: 1.5 }}>
              This score is a simulation based on the grades you entered.
            </p>

            <button className="btn btn-primary" onClick={() => setShowResult(false)}>
              Adjust Grades
            </button>
            <button 
              className="btn btn-outline" 
              style={{ border: 'none' }}
              onClick={resetCalculator}
            >
              Start Over
            </button>
          </div>
        </div>
      )}
    </>
  );
}