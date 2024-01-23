import Head from "next/head";
import { Button } from "./components/Button";
import React, { useEffect, useState } from "react";

function getRandomColor() {
  let result = "";
  for (let i = 0; i < 6; ++i) {
    const value = Math.floor(16 * Math.random());
    result += value.toString(16);
  }
  return "#" + result;
}

export default function Home() {
  const [color, setColor] = useState<string>();
  const [answers, setAnswers] = useState<string[]>();
  const [result, setResult] = useState<boolean | undefined>(undefined);

  function generateColors() {
    const actualColor = getRandomColor();
    setColor(actualColor);
    setAnswers(
      [actualColor, getRandomColor(), getRandomColor()].sort(
        () => 0.5 - Math.random(),
      ),
    );
  }

  useEffect(() => {
    generateColors();
  }, []);

  function handleClick(answer?: string) {
    if (answer === color) {
      //todo answered correctly
      setResult(true);
      generateColors();
    } else {
      //todo guesses wrong answer
      setResult(false);
    }
  }

  return (
    <>
      <Head>
        <title>Choose Hexadecimal</title>
        <meta name="description" content="Pick the right Hexadecimal Color" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="h-56 w-56" style={{ background: color }}></div>
        <div className="mt-4 flex gap-4">
          {answers?.map((answer) => (
            <Button onClick={() => handleClick(answer)} key={answer}>
              {answer}
            </Button>
          ))}
        </div>
        {result === false && <div className="text-red-500">Wrong Answer!</div>}
        {result === true && (
          <div className="text-green-500">Correct Answer!</div>
        )}
      </main>
    </>
  );
}
