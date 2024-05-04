"use client";
import React, { useState } from "react";

function DesceriptionsPreduct({ data }: { data: any }) {
  const [readMe, setReadmeBtn] = useState(false);
  const readMeBtn = () => {
    setReadmeBtn(!readMe);
  };

  return (
    <div className="desceriptions my-5 bg-light rounded-4">
      <section className="headering-desceription px-3 py-2">
        <h3>توضیحات</h3>
      </section>
      <section className="header-desceription px-3 py-3">
        <h2> معرفی {data.name}</h2>
      </section>
      <section>
        {readMe && (
          <div>
            <p id="text" className="p-desceriptions text-muted">
              {data.desceriptions}
            </p>
          </div>
        )}
        {data.desceriptions && data.desceriptions.length > 500 ? (
          <>
            <p id="text" className={`p-desceriptions ${readMe ? "d-none": "d-block"}`}>
              {data.desceriptions.substring(0, 250)} ......
            </p>
            <button
              type="button"
              onClick={readMeBtn}
              className="fs-4 btn btn-readMe mx-auto d-block rounded-5 px-5"
            >
              {readMe ? "مخفی کردن" : "نمایش کامل"}
            </button>
          </>
        ) : (
          <p id="text" className="p-desceriptions">
            {data.desceriptions}
          </p>
        )}
      </section>
    </div>
  );
}

export default DesceriptionsPreduct;
