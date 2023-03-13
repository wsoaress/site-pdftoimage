import "./Conversor.css";
import { ImSpinner2 } from "react-icons/im";
import { useState } from "react";

function Conversor() {
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);
    const spinStyle =
        "animate-spin text-center text-6xl absolute top-1/2 left-1/2 z-100";

    const handleImageUpload = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            const formData = new FormData();
            for (const file of event.currentTarget["fileInput"].files) {
                formData.append("file", file);
            }

            const response = await fetch("http://localhost:3000/upload", {
                method: "POST",
                body: formData,
            });
            const data = await response.json();
            
            setLoading(false);
            setResult(data);

        } catch (error) {
            console.error(error);
        }
    };

    //limitar quantidade de arquivos
    function limitFiles() {
        var inputFile = Array.from(document.getElementById("fileInput").files);
        if (inputFile.length > 50) {
            document.getElementById("submit").disabled = true;
            document.getElementById("submit").style.background = "#3b82f669";
        } else {
            document.getElementById("submit").disabled = false;
            document.getElementById("submit").style.background = "#3b82f6";
        }
    }

    return (
      <div className="main">
        {/* tela de carregamento */}
        {loading ? (
          <div>
            <div className=" text-malibu-500 z-100">
              <ImSpinner2 className={spinStyle} />
            </div>

            <div className="inset-center z-40 text-9xl text-malibu-900 bg-black bg-opacity-20 w-screen h-full"></div>
          </div>
        ) : (
          <></>
        )}

        {/* Voltar para o Hub */}
        <div className="mx-auto">
          <div className="bg-blue-500 hover:bg-blue-600 transition ease-in-out duration-[0.25] inline-flex items-center justify-center rounded-full px-4 py-1 mt-10 ml-6">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#ffffff"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <polyline
                  points="80 152 32 104 80 56"
                  fill="none"
                  stroke="#ffffff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></polyline>
                <path
                  d="M224,200a96,96,0,0,0-96-96H32"
                  fill="none"
                  stroke="#ffffff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></path>
              </svg>
            </span>
            &nbsp;
            <a href="" className="text-white">
              voltar para o hub
            </a>
          </div>

          {/* container do form file */}
          <div className="mb-10 glass mt-10 w-[400px] md:w-[35%] max-w-full h-[200px] flex flex-col items-center justify-center mx-auto">
            <form
              className="flex flex-col mt-6 justify-center items-center"
              onSubmit={handleImageUpload}
            >
              <input
                className="file:mr-4 file:py-3 file:px-5 file:rounded file:border-0 file:text-md file:font-semibold file:bg-blue-100 file:text-blue-500 hover:file:bg-blue-200 transition ease-in-out duration-150"
                onChange={limitFiles}
                multiple
                required
                accept="application/pdf"
                id="fileInput"
                type="file"
              />

              <div className="mt-2 flex-row flex">
                <label
                  className="bg-blue-500 hover:bg-blue-600 rounded-full py-2.5 px-10 text-lg font-semibold text-white transition ease-in-out duration-150 mt-6 cursor-pointer"
                  htmlFor="submit"
                >
                  Converter
                </label>
                <input className="hidden" type="submit" id="submit" />
                {/*botão de download*/}
                {result ? (
                  <a
                    className="rounded-full py-2.5 px-10 text-lg font-semibold text-blue-500 hover:text-blue-800 transition ease-in-out duration-150 mt-6 cursor-pointer"
                    href={"http://localhost:3000/file/" + result.fileName}
                  >
                    Download
                  </a>
                ) : (
                  <></>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}

export default Conversor;

