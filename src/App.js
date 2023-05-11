function App() {
  return (
    <div>
      <h1>IP Address Tracker</h1>
      <input placeholder="Search for any IP address or domain" />
      <button></button>
      <div>
        <p>IP ADDRESS</p>
        {/* IP address */}

        <p>LOCATION</p>
        {/* City, State Zip */}

        <p>TIMEZONE</p>
        {/* Current UTC time */}

        <p>ISP</p>
        {/* ISP name */}
      </div>
    </div>
  );
}

export default App;
