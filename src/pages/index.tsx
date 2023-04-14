export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div>
        <h1>Welcome</h1>
        <div className="flex flex-col">
          <label htmlFor="name">Username:</label>
          <input className="text-black" type="text" id="name" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password:</label>
          <input className="text-black" type="password" id="password" />
        </div>
        <div>
          <h4>Entrar com:</h4>
          <ul>
            <li>Google</li>
            <li>Github</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
