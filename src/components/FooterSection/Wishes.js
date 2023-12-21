"use client";

import React, { useState } from "react";

const Wishes = (props) => {
  const [wishes, setWishes] = useState("");

  const submitWishes = () => {
    if (wishes) {
      fetch(`https://caterify-dev.hasura.app/v1/graphql`, {
        method: "POST",
        body: JSON.stringify({
          query: `mutation ($wishes: String!) { insert_wishes_na_wishes(objects: {wishes: $wishes}) { affected_rows } }`,
          variables: { wishes },
        }),
      })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center z-10 space-y-6 lg:space-y-0 lg:space-x-6">
      <input
        className="font-poppins text-[16px] p-4 rounded-xl w-[80vw] lg:w-[40vw]"
        placeholder="Send your wishes"
        value={wishes}
        onChange={(e) => setWishes(e.target.value)}
      />
      <button
        className="font-poppins text-[16px] bg-darkPink text-white py-4 px-8 rounded-xl"
        onClick={submitWishes}
      >
        Submit
      </button>
    </div>
  );
};

export default Wishes;
