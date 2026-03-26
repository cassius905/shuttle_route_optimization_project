import Footer from "../components/Footer";
import { Link } from "react-router-dom";
export default function Login() {
    return (
        <div className="flex flex-col items-center bg-[#FFFCF4] min-w-screen min-h-screen overflow-hidden">
            <div className="flex justify-center items-center min-w-screen min-h-screen">
                <div className="flex flex-col items-center justify-center bg-[#8DDC8D] min-w-screen min-h-screen overflow-hidden">
                    <div className="w-[415px] h-[106px] relative m-20">
                        /*로고 클릭시 MAIN 페이지로 이동 */
                        <Link to = "/">
                            <p className="text-[#FFFCF4] font-orbitron text-8xl font-black leading-[1.1em] w-[415px] h-[106px] absolute left-0 top-0 text-center tracking-[-0.03em]">
                                Tasio&#x3D;3
                            </p>
                        </Link>
                    </div>
                    <div className="rounded-[40px] justify-center bg-[#FFFCF4] w-[903px] h-[548px] overflow-hidden relative">
                        <button className="cursor-pointer text-nowrap flex py-6 px-0 justify-center items-center rounded-[40px] bg-[#8DDC8D] w-[607px] h-[118px] absolute left-[148px] top-[337px]">
                            <p className="text-[#FFFCF4] font-orbitron text-[64px] font-black leading-[1.1em] w-[173px] h-[70px] text-center tracking-[-0.03em]">
                                로그인
                            </p>
                        </button>
                        <div className="flex pb-11 flex-col items-start gap-[13px] w-[624px] h-[317px] absolute left-[140px] top-11">
                            <div className="flex pr-[65px] items-center gap-[26px] rounded-[40px] border border-[rgba(0,0,0,0.50)] bg-[#FFFCF4] w-[624px] h-[130px] overflow-hidden">
                                <div className="w-[107px] h-[98px] relative">
                                    <div className="w-[46px] h-[65px] absolute left-[31px] top-4">
                                        <div className="w-[46px] h-[65px] absolute left-0 top-0">
                                            <svg
                                                width="46"
                                                height="35"
                                                viewBox="0 0 46 35"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-[46px] h-[35px] absolute left-0 top-[30px] "
                                            >
                                                <path
                                                    d="M12 0.5H34C40.3513 0.5 45.5 5.64873 45.5 12V23C45.5 29.3513 40.3513 34.5 34 34.5H12C5.64873 34.5 0.5 29.3513 0.5 23V12C0.5 5.64873 5.64873 0.5 12 0.5Z"
                                                    fill="#8DDC8D"
                                                    stroke="#FFFCF4"
                                                />
                                            </svg>
                                            <svg
                                                width="40"
                                                height="33"
                                                viewBox="0 0 40 33"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-10 h-[33px] absolute left-[3px] top-0 "
                                            >
                                                <path
                                                    d="M19.75 5C28.8528 5 34.5 10.9049 34.5 16.25C34.5 21.5951 28.8528 27.5 19.75 27.5C10.6472 27.5 5 21.5951 5 16.25C5 10.9049 10.6472 5 19.75 5Z"
                                                    fill="#8DDC8D"
                                                    stroke="#8DDC8D"
                                                    strokeWidth="10"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <p className="flex flex-col justify-center text-[#8DDC8D] font-orbitron text-[40px] font-black leading-[1.1em] w-[426px] h-[130px] text-center tracking-[-0.03em]">
                                    <input type="text" placeholder="아이디를 입력하세요" className="min-h-max mx-4 outline-none"/>
                                </p>
                                
                            </div>
                            <div className="flex pr-[65px] items-center gap-[27px] rounded-[40px] border border-[rgba(0,0,0,0.50)] bg-[#FFFCF4] w-[624px] h-[130px] overflow-hidden">
                                <div className="w-[106px] h-[98px] relative">
                                    <div className="w-[46px] h-[57px] absolute left-[30px] top-[19px]">
                                        <svg
                                            width="46"
                                            height="40"
                                            viewBox="0 0 46 40"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-[46px] h-10 absolute left-0 top-[17px] "
                                        >
                                            <path d="M0 0H46V40H0V0Z" fill="#8DDC8D" />
                                        </svg>
                                        <svg
                                            width="40"
                                            height="39"
                                            viewBox="0 0 40 39"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-10 h-[39px] absolute left-[3px] top-0 "
                                        >
                                            <path
                                                d="M19.75 5C27.9564 5 34.5 11.5517 34.5 19.5C34.5 27.4483 27.9564 34 19.75 34C11.5436 34 5 27.4483 5 19.5C5 11.5517 11.5436 5 19.75 5Z"
                                                stroke="#8DDC8D"
                                                strokeWidth="10"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <p className="flex flex-col justify-center text-[#8DDC8D] font-orbitron text-[40px] font-black leading-[1.1em] w-[426px] h-[130px] text-center tracking-[-0.03em]">
                                    <input type="password" placeholder="비밀번호를 입력하세요" className="min-h-max mx-4 outline-none"/>
                                </p>
                            </div>
                        </div>
                        <div className="flex py-px px-[92px] items-start gap-[37px] absolute left-[178px] top-[476px]">
                            <p className="text-[#8DDC8D] font-orbitron text-[32px] font-black leading-[1.1em] w-fit tracking-[-0.03em]">
                                아직 계정이 없어요
                            </p>
                            <p className="text-[#1DB41D] font-orbitron text-[32px] font-black leading-[1.1em] w-fit tracking-[-0.03em]">
                                회원가입
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}