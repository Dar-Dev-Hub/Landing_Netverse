import { useEffect, useState } from "react";
import { getUserWallet } from "../Services/authService";

export function PricingCard({ ac }: { ac: boolean }) {
  const [walletData, setWalletData] = useState<any | null>(null);

  useEffect(() => {
    const fetchWalletData = async () => {
      try {
        const data = await getUserWallet();
        setWalletData(data);
      } catch (error) {
        console.error("Failed to fetch wallet data:", error);
      }
    };

    fetchWalletData();
  }, []);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const openDialog = () : void => {
    setIsDialogOpen(true);
  }
  return (
    <div className="flex flex-col space-y-8 w-full px-16 max-w-xl">

      <div className="bg-gradient-to-tl from-gray-900 to-gray-800 text-white h-40 w-96 p-6 rounded-xl shadow-md">
        <div className="h-full flex flex-col justify-between">
          <div className="flex items-start justify-between space-x-4">
            <div className="text-xl font-semibold tracking-tigh">
              {/* Conditionally render based on the card type */}
              {ac ? "Wallet AC" : "ADS points"}
            </div>
          </div>
          <div className="">
            <div className="text-xs font-semibold tracking-tight">
              Your Total Balance is 
            </div>
            <div className="text-2xl font-semibold">
              {ac && walletData ? walletData['ac_cash'] : walletData ? walletData['points'] : ""}
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute right-10 flex space-x-2 items-start bg-white text-gray-900 border-gray-200 shadow-2xl -mt-10 w-72 px-2 py-3 rounded-lg">
          <div className="flex-initial">
            <div className="inline-flex items-center justify-center rounded-lg bg-gradient-tl from-green-400 via-green-400 bg-green-300">
              <div className="p-2">
              <button onClick={openDialog} type="button">
                <svg className="h-4 w-4 text-white opacity-90" width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M15 8.5C14.315 7.81501 13.1087 7.33855 12 7.30872M9 15C9.64448 15.8593 10.8428 16.3494 12 16.391M12 7.30872C10.6809 7.27322 9.5 7.86998 9.5 9.50001C9.5 12.5 15 11 15 14C15 15.711 13.5362 16.4462 12 16.391M12 7.30872V5.5M12 16.391V18.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                </button>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    
  );
}
