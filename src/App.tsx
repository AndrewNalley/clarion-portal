import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import './App.css'


console.log(import.meta.env.VITE_PROJECT_URL)
const supabase = createClient(import.meta.env.VITE_PROJECT_URL, import.meta.env.VITE_ANON_KEY);
function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents();
  }, []);

  async function getStudents() {
    const { data } = await supabase.from("students").select();
    setStudents(data);
  }


  return (
    <>
      <ul>
        {students.map((student) => (
          <li key={student.id}>{student.first_name}{student.last_name}{console.log(students)}</li>

        ))}
      </ul>
    </>
  )
}

export default App
