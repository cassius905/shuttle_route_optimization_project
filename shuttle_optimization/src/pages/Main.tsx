import busImage from '../assets/Bus_33913241.png';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
export default function Main() {
    return (
        <div className="flex flex-col items-center bg-[#FFFCF4] min-w-screen min-h-screen relative">
            <Header />
            <div className="flex pt-[187px] pr-0 pb-[548px] pl-0 flex-col items-center bg-[#8DDC8D] w-full h-[1319px] overflow-hidden">
                <div className="w-full h-[584px] relative">
                    <div className="bg-[#FFFCF4] w-full min-h-[600px] flex items-center justify-center py-20">
                        <div className="flex items-center gap-20 max-w-[1200px] w-full px-10">
                            <div className="flex flex-col items-center flex-1">
                                <p className="text-[#8DDC8D] font-orbitron text-5xl font-medium leading-relaxed tracking-tighter">
                                    편리한 셔틀 예약 플랫폼
                                </p>
                                <p className="text-[#8DDC8D] font-orbitron text-8xl font-black leading-tight tracking-tight mt-2">
                                    Tasio=3
                                </p>
                                <p className="text-[#8DDC8D] font-orbitron text-2xl font-medium mt-6">
                                    망설이지 말고 바로 시작해보세요.
                                </p>

                                <button className="mt-12 cursor-pointer transition-all duration-300 hover:scale-110 rounded-[40px] bg-[#8DDC8D] w-[345px] h-[114px] flex items-center justify-center">
                                    <Link to="/login">
                                        <p className="text-[#FFFCF4] font-orbitron text-5xl font-black">
                                            시작하기
                                        </p>
                                    </Link>
                                </button>
                            </div>
                            <div className="flex-1 flex justify-center">
                                <img
                                    src={busImage}
                                    className="w-[577px] h-auto object-contain"
                                    alt="bus"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}