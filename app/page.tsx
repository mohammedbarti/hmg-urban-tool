'use client';

import Image from 'next/image';

export default function HomePage() {
  return (
    <div style={{ textAlign: 'center', padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      {/* Logo top-left */}
      <div style={{ position: 'absolute', top: 20, left: 20 }}>
        <Image src="/logo.png" alt="HMG Logo" width={120} height={40} />
      </div>

      {/* Title */}
      <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>
        HMG Urban Planning Tool
      </h1>

      {/* Welcome Text */}
      <p style={{ fontSize: '1.1rem', marginBottom: '40px' }}>
        Welcome to the HMG Healthcare Urban Planning Tool.
      </p>

      {/* Recommendations Section */}
      <div style={{ textAlign: 'left', maxWidth: '700px', margin: '0 auto' }}>
        <h2>Recommendations:</h2>
        <ul style={{ fontSize: '1rem', lineHeight: '1.6' }}>
          <li>
            <strong>4 PHCs</strong> — Based on population size (40,000 people) and a 600m walkability radius.
          </li>
          <li>
            <strong>2 Emergency Pods</strong> — To cover high-density zones and ensure rapid response times.
          </li>
          <li>
            <strong>1 Telehealth Booth</strong> — Supports underserved or transit-heavy areas with digital consultation.
          </li>
        </ul>
      </div>

      {/* Footer */}
      <p style={{ position: 'absolute', bottom: 10, right: 20, fontSize: '0.9rem', color: '#555' }}>
        Made by: Dr. Mohammed AlBarti – Corporate Business Development
      </p>
    </div>
  );
}
