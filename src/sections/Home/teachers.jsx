import FICPic from "../../assets/images/facultyImages/faculty1.jpg";
import POCPic from "../../assets/images/facultyImages/faculty2.jpg";
export const FIC = () => {
  return (
    <div className="h-screen w-full bg-white mb-10">
      <div className="h-full flex-col justify-center items-center w-full flex md:flex-row">
        <div className=" h-full w-1/2 p-4">
          <span className="font-bold text-black w-full h-full flex flex-col justify-center items-center">
            <span className="text-8xl md:text-9xl py-0 bg-gradient-to-br from-orange-700  via-orange-300 to-orange-700 grad bg-clip-text text-transparent">
              UiPath
            </span>
            <span className="text-2xl py-0 text-center w-[400px]">
              Student Community KIIT
            </span>
            <span></span>
          </span>
        </div>
        <div className=" h-full md:py-36 md:pr-20 w-1/2 gap-8 flex md:flex-row flex-col">
          <div className="h-full w-full md:w-1/2 mb-8">
            <img
              src={FICPic}
              className="h-full object-cover w-full"
              alt="faculty incharge"
            />
            <h1 className=" text-center font-bold my-4 text-xl leading-8 font-oswald">
              FACULTY IN-CHARGE
            </h1>
          </div>
          <div className="h-full w-full  md:w-1/2">
            <img
              src={POCPic}
              alt="POC"
              className="h-full object-cover w-full"
            />
            <h1 className=" text-center font-bold my-4 text-xl leading-8 font-oswald">
              POINT OF CONTACT
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
