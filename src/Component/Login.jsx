import background from "../assets/image/background.jpg";
import loginPic from "../assets/image/loginPic.jpg";
import Form from "./Form";
function Login() {
  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="bg-cover bg-center w-full h-screen "
    >
      <div className="flex justify-center flex-col h-screen">
        <div className="flex flex-col justify-center items-center w-full">
          <img
            alt="loginPic"
            src={loginPic}
            className="w-4/6 sm:w-1/3  shadow-xl shadow-slate-900 rounded-t-lg"
          />
          <div className="bg-amber-50 w-4/6 sm:w-1/3 shadow-xl shadow-slate-900 opacity-65 rounded-b-lg ">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
