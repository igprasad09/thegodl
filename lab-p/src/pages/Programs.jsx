import React from "react";
import { Link } from "react-router-dom";

function Programs() {
  const programs = [
    "PMG 1: Check whether the number belongs to the Fibonacci series?",
    "PMG 2: Solve Quadratic Equations",
    "PMG 3: Find the sum of natural numbers",
    "PMG 4: Display Multiplication table",
    "PMG 5: Check if a number is prime",
    "PMG 6: Implement sequential search",
    "PMG 7: Create a calculator program",
    "PMG 8: Explore string functions",
    "PMG 9: Implement selection sort",
    "PMG 10: Implement stack",

    "PMG 11: Read and Write into a file",
    "PMG 12: Demonstrate usage of basic regular expression",
    "PMG 13: Demonstrate use of advanced regular expressions for -data",
    "PMG 14: Demonstrate use of List",
    "PMG 15: Demonstrate use of Dictionaries",
    "PMG 16: Create SQLite Database and perform operations on tables",
    "PMG 17: Create a GUI using Tkinter module",
    "PMG 18: Demonstrate exceptions in python",
    "PMG 19: Drawing Line chart and Bar chart using Matplotlib",
    "PMG 20: Drawing Histogram chart and Pie chart using Matplotlib",
    "PMG 21: perform arithmetic operations on the Numpy arrays",
    "PMG 22: Create data frame from Excel sheet using Pandas and perform operations on data frames",
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <div className="grid gap-4 mt-4 w-full max-w-lg">
        {programs.map((text, index) => (
          <Link to={`/pmg${index + 1}`} pgmnum='2' key={index}>
            <button className="w-full h-10  font-bold cursor-pointer bg-white rounded-xl shadow-md hover:bg-gray-200">
              <span>{text}</span>
            </button>
          </Link>
        ))}
      </div>

      {/* Background */}
      <div className="absolute top-0 left-0 z-[-2] w-full h-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    </div>
  );
}

export default Programs;
