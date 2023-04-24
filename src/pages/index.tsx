import { Input } from '@/componentes';
import { ChangeEvent, useState } from 'react';

export default function Home() {
  const [values, setValues] = useState({ userName: '', password: '' });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex justify-center flex-col items-center gap-2">
        <h1 className="text-5xl text-black font-bold">Welcome</h1>
        <div className="flex flex-col gap-3">
          <Input
            onChange={handleChange}
            value={values.userName}
            label="Username"
            name="userName"
            id="userName"
            type="text"
          />
          <Input
            onChange={handleChange}
            value={values.password}
            label="Password"
            name="password"
            id="password"
            type="password"
          />
        </div>

        {/* <h4>Entrar com:</h4>
        <ul>
          <li>Google</li>
          <li>Github</li>
        </ul> */}
      </div>
    </main>
  );
}
