import React, { useState } from "react";
import dollar from "./images/icon-dollar.svg";
import person from "./images/icon-person.svg";

function Calculator() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [split, setSplit] = useState(1);
  const [people, setPeople] = useState(0);
  const [splitTotal, setSplitTotal] = useState(0);

  const price = (e) => {
    setBill(e.target.value);
    calc();
  };
  const extra = (e) => {
    setTip(e.target.value);
    calc();
  };
  const num = (e) => {
    setSplit(e.target.value);
    calc();
  };

  const reset = () => {
    setBill("");
    setPeople(0);
    setSplit("");
    setTip(0);
    setSplitTotal(0);
    console.log(bill, people, split, tip, splitTotal);
  };

  const calc = () => {
    const percent = Math.floor(1 + tip / 100);
    const result = Math.floor((bill * percent) / split);
    const person = Math.floor(splitTotal / 10);
    setPeople(person);
    setSplitTotal(result);
  };

  return (
    <div className="flex flex-col justify-center md:w-[90%] overflow-x-hidden  ">
      <div className=" flex flex-col text-center mt-10 md:ml-[20%] text-Darkgrayishcyan font-semibold">
        <p>SPLI</p>
        <p>TTER</p>
      </div>
      <div className="bg-white w-fit rounded-xl md:flex justify-center ml-[8%] md:ml-[20%] md:mt-10 md:h-[50%] md:w-[80%]">
        {/*  */}
        <div className="w-fit">
          <div className="my-2 mx-5">
            <p className="text-Darkgrayishcyan font-medium">Bill</p>
            <div className="bg-gray-200/80 border flex border-gray-200 rounded-md w-fit">
              <label htmlFor="$">
                <img src={dollar} alt="/" className="my-2 mx-2" />
              </label>
              <input
                type="text"
                className="bg-gray-200/80 border border-gray-200 rounded-md text-Verydarkcyan font-bold text-end mx-5 md:w-[350px]"
                value={bill}
                onChange={price}
              />
            </div>
          </div>
          {/* desktop */}
          <div className="hidden md:flex flex-col my-2 mx-5 w-[60%] ">
            <p className="text-Darkgrayishcyan font-medium">Select Tip %</p>
            <div className="flex">
              <button
                onClick={extra}
                value={5}
                className="mx-3 w-44  text-white bg-Verydarkcyan my-2 rounded-sm p-2 hover:text-Verydarkcyan hover:bg-Strong-Cyan text-bold text-xl  cursor-pointer"
              >
                5%
              </button>
              <button
                onClick={extra}
                value={10}
                className="mx-3 w-44  text-white bg-Verydarkcyan my-2 rounded-sm p-2 hover:text-Verydarkcyan hover:bg-Strong-Cyan text-bold text-xl  cursor-pointer"
              >
                10%
              </button>
              <button
                onClick={extra}
                value={15}
                className="mx-3 w-44  text-white bg-Verydarkcyan my-2 rounded-sm p-2 hover:text-Verydarkcyan hover:bg-Strong-Cyan text-bold text-xl  cursor-pointer"
              >
                15%
              </button>
            </div>

            <div className="flex ">
              <button
                onClick={extra}
                value={20}
                className="mx-3 w-44  text-white bg-Verydarkcyan my-2 rounded-sm p-2 hover:text-Verydarkcyan hover:bg-Strong-Cyan text-bold text-xl  cursor-pointer"
              >
                20%
              </button>
              <button
                onClick={extra}
                value={50}
                className="mx-3 w-44  text-white bg-Verydarkcyan my-2 rounded-sm p-2 hover:text-Verydarkcyan hover:bg-Strong-Cyan text-bold text-xl  cursor-pointer"
              >
                50%
              </button>
              <button className="mx-3 w-44 bg-gray-200 text-teal-600  my-2 rounded-sm p-2 hover:bg-gray-400 hover:text-teal-900">
                Custom
              </button>
            </div>
          </div>
          {/* mobile */}
          <div className="my-2 mx-5 md:hidden">
            <p className="text-Darkgrayishcyan font-medium">Select Tip %</p>
            <section className="flex my-5">
              <button
                onClick={extra}
                value={5}
                className="mx-8 w-32  text-white bg-Verydarkcyan my-2 rounded-md hover:text-Verydarkcyan hover:bg-Strong-Cyan text-bold text-xl  cursor-pointer"
              >
                5%
              </button>
              <button
                onClick={extra}
                value={10}
                className="mx-8 w-32  text-white bg-Verydarkcyan my-2 rounded-md hover:text-Verydarkcyan hover:bg-Strong-Cyan text-bold text-xl  cursor-pointer"
              >
                10%
              </button>
            </section>
            <section className="flex my-5">
              <button
                onClick={extra}
                value={15}
                className="mx-8 w-32  text-white bg-Verydarkcyan my-2 rounded-md hover:text-Verydarkcyan hover:bg-Strong-Cyan text-bold text-xl  cursor-pointer"
              >
                15%
              </button>
              <button
                onClick={extra}
                value={20}
                className="mx-8 w-32  text-white bg-Verydarkcyan my-2 rounded-md hover:text-Verydarkcyan hover:bg-Strong-Cyan text-bold text-xl  cursor-pointer"
              >
                20%
              </button>
            </section>
            <section className="flex my-5">
              <button
                onClick={extra}
                value={50}
                className="mx-8 w-32  text-white bg-Verydarkcyan my-2 rounded-md hover:text-Verydarkcyan hover:bg-Strong-Cyan text-bold text-xl  cursor-pointer"
              >
                50%
              </button>
              <button className="mx-8 w-32 bg-gray-200 text-teal-600  my-2 rounded-md hover:bg-gray-400 hover:text-teal-900">
                Custom
              </button>
            </section>
          </div>
          <div className="my-2 mx-5">
            <p className="text-Darkgrayishcyan font-medium">Number of people</p>
            <div className="bg-gray-200/80 borde flex border-gray-200 rounded-md w-fit">
              <label htmlFor="$">
                <img src={person} alt="/" className="my-2 mx-2" />
              </label>
              <input
                type="text"
                onChange={num}
                className="bg-gray-200/80 border border-gray-200 text-Verydarkcyan font-bold rounded-md text-end mx-5 md:w-[350px]"
              />
            </div>
          </div>
        </div>
        {/*  */}
        <div className="-ml-[10%]">
          <div className=" bg-Verydarkcyan rounded-md md:rounded-lg mx-5 my-8 md:h-fit text-Verylightgrayishcyan">
            <div className="mx-4 flex justify-between md:w-[100%]">
              <section className="mx-10 my-2 md:w-[50%]">
                <p>Tip Ammount</p>
                <p className="text-sm text-Grayishcyan">/ Person</p>
              </section>
              <section className="mx-10 my-2 md:w-[50%]">
                <p className="text-bold text-2xl text-Strong-Cyan inline-block">
                  $ {people}
                </p>
              </section>
            </div>
            <div className="mx-4 flex justify-between md:my-4 md:w-[100%] ">
              <section className="mx-10 my-2 md:w-[50%]">
                <p>Total</p>
                <p className="text-sm text-Grayishcyan">/ Person</p>
              </section>
              <section className="mx-10 my-2 md:w-[50%]">
                <p className="text-bold text-2xl text-Strong-Cyan inline-block">
                  $ {splitTotal}
                </p>
              </section>
            </div>
            <div className="flex justify-center py-5 md:mt-[25%]  ">
              <button
                onClick={reset}
                className="mx-8 w-[50%] md:w-[80%]  text-Verydarkcyan  bg-Strong-Cyan    rounded-sm hover:bg-teal-800 hover:text-gray-200"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
}

export default Calculator;
