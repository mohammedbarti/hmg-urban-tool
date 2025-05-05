export const metadata = {
  title: 'HMG Urban Planning Tool',
  description: 'Healthcare Modeling for Urban Projects',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body style={{ margin: 0, fontFamily: 'Arial, sans-serif' }}>
        {children}
        <footer style={{ position: 'fixed', bottom: 10, right: 20, fontSize: '12px', color: '#666' }}>
          Made by: Dr. Mohammed alBarti – Corporate Business Development
        </footer>
      </body>
    </html>
  );
}
