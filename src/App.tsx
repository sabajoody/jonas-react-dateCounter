import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [futureDate, setFutureDate] = useState(new Date());
  // const [sentence, setSentence] = useState("today is");

  function formatDate(date: Date) {
    return date.toLocaleDateString("en-US", {
      weekday: "long", // Full day name (e.g., Monday)
      year: "numeric",
      month: "long", // Full month name (e.g., February)
      day: "numeric", // Day number (e.g., 5)
    });
  }
  //***another way of getting the date, which was useless!!
  // const month = today.getMonth();
  // const day = today.getDate();
  // const year = today.getFullYear();
  // return month + "/" + day + "/" + year;
  /////////////////////////////////////////////
  // ***jonas way of getting date:
  // const date = new Date("june 21 2027");
  // date.setDate(date.getDate() + count);

  const todayFormatted = formatDate(futureDate);

  function calcDate() {
    const newDate = new Date();
    newDate.setDate(newDate.getDate() + count);
    setFutureDate(newDate);
  }

  useEffect(() => {
    calcDate();
  }, [count]); // Runs calcDate() whenever count changes

  function handelPreviousStep() {
    setStep((s) => s - 1);
  }
  function handelPreviousCount() {
    setCount((c) => c - step);
  }
  function handelNextStep() {
    setStep((s) => s + 1);
  }
  function handelNextCount() {
    setCount((c) => c + step);
  }

  return (
    <div>
      <div className="date-button">
        <button className="buttons" onClick={handelPreviousStep}>
          -
        </button>
        <p> Step: {step} </p>
        <button className="buttons" onClick={handelNextStep}>
          +
        </button>
      </div>

      <div className="date-button">
        <button className="buttons" onClick={handelPreviousCount}>
          -
        </button>
        <p> Count: {count} </p>
        <button className="buttons" onClick={handelNextCount}>
          +
        </button>
      </div>
      <div>
        {count === 0 && <span>Today Is </span>}
        {count > 0 && <span>{count} Day(s) From Today is </span>}
        {count < 0 && <span>{-count} Days Ago Was</span>}
        {/* Math.abs(count) */}
        {todayFormatted}
      </div>
    </div>
  );
}
