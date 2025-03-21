import { useState } from "react";
import button from "../assets/Button-icon-banner.png";
import { tableData } from "../constants";
import solana from "../assets/Solana.png";
import ethereum from "../assets/Ethereum.png";
import cosmos from "../assets/Frame.png";
import leftimage from "../assets/Left-end-image.png";
import rightimage from "../assets/right-end-image.png";
import guides from "../assets/Guides.png";
import community from "../assets/Community.png";
import rewards from "../assets/Rewards.png";
import experience from "../assets/Experience.png";
import nextArrow from "../assets/Next-arrow.png";
import stepArrow from "../assets/stepArrow.png";
import wallet from "../assets/wallet.png";
import validator from "../assets/Validator.png";
import monitor from "../assets/Monitor.png";
import delegate from "../assets/Delegate .png";
// table icon
import network from "../assets/Network.png";
import apy from "../assets/apy.png";
import uptime from "../assets/uptime.png";
import commission from "../assets/commission.png";
import details from "../assets/Details.png";
import action from "../assets/Action.png";
//below faq
import mission from "../assets/Mission.png";
import secured from "../assets/20+ Networks Secured.png";
// import communitys from "../assets/Community.png"
import stakers from "../assets/Educating Stakers.png";
import participation from "../assets/Governance Participation.png";
import security from "../assets/High Uptime & Security.png";
import hosting from "../assets/Hosting AMAs & Webinars.png";
import Decentral from "../assets/Supporting Decentralization.png";

//social icons
import telegram from "../assets/telegram.png";
import whatsapp from "../assets/whatsapp.png";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";
import discord from "../assets/discord.png";
import instagram from "../assets/instagram.png";


// security you can trust
import coldStorage from "../assets/Cold Storage for Keys.png"
import eye from "../assets/7 Continuous Monitoring.png"
import letter from "../assets/Transparent Validator History.png"
import timeReal from "../assets/Real-Time Tracking.png"
import alert from "../assets/Automated Alert System.png"
import doos from "../assets/DDoS Protection and Redundancy.png"

const Banner = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      {/* First Section */}
      <section className="relative w-full border-b">
        {/* Glowing Shadows */}
        <div className="relative">
          {/* Left Shadow Image */}
          <div className="absolute top-0 left-0 w-[300px] h-auto rounded-[16px] z-5 pointer-events-none">
            <img
              className="h-full w-full object-cover"
              src={leftimage}
              alt="Left Glow"
            />
          </div>

          {/* Right Shadow Image positioned at the bottom-right */}
          <div className="absolute top-1 mt-[250px] right-0 w-[300px] h-auto rounded-[16px] z-10 pointer-events-none">
            <img
              className="h-full w-full object-cover"
              src={rightimage}
              alt="Right Glow"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="relative mx-0 lg:mx-[100px] lg:pt-6 pb-[60px] pt-[60px] px-4 text-sm border-l border-l-customGray border-r border-r-customGray ">
          <div className="flex flex-col justify-center items-center h-auto pt-6 pb-8 lg:pb-0 z-10">
            {/* Heading */}
            <h1 className="font-orbitron text-[48px] font-bold leading-[1.5] text-center text-navy lg:pt-[130px] sm:pt-[50px]">
              Effortless Staking for <br />
              <span className="gradient-text text-[48px] font-bold">
                Maximum Rewards
              </span>
            </h1>

            {/* Subheading */}
            <p className="font-inter text-[18px] font-normal leading-[1.6] tracking-[0.2px] text-center text-Subtitles mt-4">
              Delegate your crypto to our trusted validators and earn rewards on
              top <br />
              <span>projects, including Ethereum, Solana, and Cosmos.</span>
            </p>

            {/* Button */}
            <div className="flex justify-center mt-8">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-400 text-white font-semibold text-lg rounded-[40px] shadow-md hover:from-purple-500 hover:to-blue-300 transition-all flex justify-center items-center">
                Start Staking{" "}
                <img
                  className="ml-2 w-6 h-6"
                  src={button}
                  alt="button-icon-banner"
                />
              </button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8 lg:pb-[130px] sm:pb-[80px]">
              {/* Ethereum */}
              <div className="flex flex-col sm:flex-row items-center text-center sm:text-left">
                <img
                  src={ethereum}
                  alt="Ethereum"
                  className="w-10 h-10 mb-2 sm:mb-0"
                />
                <div className="sm:ml-4">
                  <h2 className="text-[16px] font-semibold leading-[1.5] text-navy">
                    Ethereum
                  </h2>
                  <p className="text-[14px] leading-[1.5] text-lightnavy">
                    Earn 4.5% APY
                  </p>
                </div>
              </div>
              {/* Cosmos */}
              <div className="flex flex-col sm:flex-row items-center text-center sm:text-left">
                <img
                  src={cosmos}
                  alt="Cosmos"
                  className="w-10 h-10 mb-2 sm:mb-0"
                />
                <div className="sm:ml-4">
                  <h2 className="text-[16px] font-semibold leading-[1.5] text-navy">
                    Cosmos
                  </h2>
                  <p className="text-[14px] leading-[1.5] text-lightnavy">
                    Secure & Earn Rewards
                  </p>
                </div>
              </div>
              {/* Solana */}
              <div className="flex flex-col sm:flex-row items-center text-center sm:text-left">
                <img
                  src={solana}
                  alt="Solana"
                  className="w-10 h-10 mb-2 sm:mb-0"
                />
                <div className="sm:ml-4">
                  <h2 className="text-[16px] font-semibold leading-[1.5] text-navy">
                    Solana
                  </h2>
                  <p className="text-[14px] leading-[1.5] text-lightnavy">
                    Earn up to 7.58% APY
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="relative w-full  border-b border-customGray">
        {/* Container for the second section */}
        <div className="relative">
          {/* Left Shadow Image */}
          <div className="absolute top-0 left-0 w-[300px] h-auto rounded-[16px] z-5 pointer-events-none">
            <img
              className="h-full w-full object-cover"
              src={leftimage}
              alt="Left Glow"
            />
          </div>

          {/* Right Shadow Image positioned at the bottom-right */}
          <div className="absolute top-[100px] mt-[600px] right-0 w-[300px] h-auto rounded-[16px] z-10 pointer-events-none">
            <img
              className="h-full w-full object-cover"
              src={rightimage}
              alt="Right Glow"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="relative mx-0 lg:mx-[100px] lg:pb-0 lg:pt-0 pb-[60px] pt-[60px] px-4 text-sm border-l border-l-customGray border-r border-r-customGray">
          {/* Add your content here */}
          <div className="flex flex-col justify-center items-center h-auto pt-[30px] pb-[30px] sm:pt-[60px] sm:pb-[60px] z-10">
          {/* Heading */}
            <h1 className="font-orbitron  text-[40px] font-bold leading-[64px] text-center text-navy lg:pt-[130px] sm:pt-[50px]">
              Why Stake with
              <span className="gradient-text  text-[40px] font-bold ml-3">
                Us ?
              </span>
            </h1>

            <span className="gradient-text text-[18px] text-center leading-[25px] font-bold mt-[30px] mb-[30px]">
              We Don’t Just Run Validators; We Build Trust
            </span>

            {/* Subheading */}
            <p className="font-inter text-[18px] font-normal leading-[1.6] tracking-[0.2px] text-center text-Subtitles mt-4">
              With years of experience operating across multiple networks, we’ve
              mastered the art of providing reliable, secure, <br /> and
              high-uptime staking services. Our validator infrastructure is
              optimized for maximum rewards, low fees, and minimal downtime.{" "}
              <br /> When you stake with us, you join a community of
              forward-thinking stakers who value transparency, <br /> security,
              and consistent returns. From beginner-friendly guides to advanced
              monitoring tools, we provide <br /> everything you need to make
              staking easy, safe, and profitable. <br />
              <span>projects, including Ethereum, Solana, and Cosmos.</span>
            </p>

            {/*  gird start here*/}

            <div className="grid grid-cols-2  mt-[40px] mb-[40px]  ">
              {/* Row 1, Column 1 */}
              <div className="flex flex-col sm:flex-row items-center text-center sm:text-left border-b border-r border-customGray p-6">
                <img
                  src={experience}
                  alt="Experience"
                  className="w-[88px] h-[88px] mb-2 sm:mb-0"
                />
                <div className="sm:ml-4">
                  <h2 className="text-[16px] font-semibold leading-[1.5] text-navy">
                    Experience Across Networks
                  </h2>
                  <p className="text-[14px] leading-[1.5] text-lightnavy">
                    Years of reliable, secure services
                  </p>
                </div>
              </div>

              {/* Row 1, Column 2 */}
              <div className="flex flex-col sm:flex-row items-center text-center sm:text-left border-b border-customGray p-6">
                <img
                  src={rewards}
                  alt="Rewards"
                  className="w-[88px] h-[88px] mb-2 sm:mb-0"
                />
                <div className="sm:ml-4">
                  <h2 className="text-[16px] font-semibold leading-[1.5] text-navy">
                    High Rewards & Low Fees
                  </h2>
                  <p className="text-[14px] leading-[1.5] text-lightnavy">
                    Optimized for maximum APY with minimal fees
                  </p>
                </div>
              </div>

              {/* Row 2, Column 1 */}
              <div className="flex flex-col sm:flex-row items-center text-center sm:text-left border-r border-customGray p-6">
                <img
                  src={community}
                  alt="community"
                  className="w-[88px] h-[88px] mb-2 sm:mb-0"
                />
                <div className="sm:ml-4">
                  <h2 className="text-[16px] font-semibold leading-[1.5] text-navy">
                    Community of Stokers
                  </h2>
                  <p className="text-[14px] leading-[1.5] text-lightnavy">
                    Join a trusted network with consistent returns
                  </p>
                </div>
              </div>

              {/* Row 2, Column 2 */}
              <div className="flex flex-col sm:flex-row items-center text-center sm:text-left p-6">
                <img
                  src={guides}
                  alt="Guides"
                  className="w-[88px] h-[88px] mb-2 sm:mb-0"
                />
                <div className="sm:ml-4">
                  <h2 className="text-[16px] font-semibold leading-[1.5] text-navy">
                    User-Friendly Guides
                  </h2>
                  <p className="text-[14px] leading-[1.5] text-lightnavy">
                    Guides for all skill levels
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8 w-full  sm:pb-[80px] ">
              <div className="gradient-border">
                <button className="gradient-border-inner shadow-md">
                  Start Staking{" "}
                  <img
                    className="ml-2 w-6 h-6 color"
                    src={nextArrow}
                    alt="button-icon-banner"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*section three  */}

      <section className="relative w-full border-b border-customGray ">
        {/* Background Shadow Images */}
        <div className="relative">
          {/* Left Shadow Image */}
          <div className="absolute top-0 left-0 w-[300px] h-auto rounded-[16px] z-10 pointer-events-none">
            <img
              className="h-full w-full object-cover"
              src={leftimage}
              alt="Left Glow"
            />
          </div>

          {/* Right Shadow Image */}
          <div className="absolute top-[650px] right-0 w-[300px] h-auto rounded-[16px] z-10 pointer-events-none">
            <img
              className="h-full w-full object-cover"
              src={rightimage}
              alt="Right Glow"
            />
          </div>
        </div>

        {/* Main Content Section */}
        <div className="relative mx-0 lg:mx-[100px] lg:pb-[60px] lg:pt-0 pb-[60px] pt-[60px] px-4 text-sm border-l border-l-customGray border-r border-r-customGray">
          {/* Add your content here */}
          <div className="flex flex-col justify-center items-center h-auto pt-6 z-10">
            {/* Heading */}
            <h1 className="font-orbitron text-[40px] font-bold leading-[64px] text-center text-navy lg:pt-[130px] sm:pt-[50px]">
              Explore Our
              <span className="gradient-text text-[40px] font-bold ml-3">
                Validators
              </span>
            </h1>

            <span className="gradient-text text-[18px] text-center leading-[25px] font-bold mt-[30px] mb-[30px]">
              Easily Select and Delegate Your Tokens to Trusted Validators
            </span>

            {/*  gird start here*/}
            <div className="pb-[130px]">
              {/* For larger screens, show a scrollable table */}
              <div className="overflow-x-auto hidden sm:block">
                <table className="w-full table-auto border-collapse">
                  {/* Table Header */}
                  <thead>
                    <tr className="text-navy text-left">
                      <th className="px-[18px] py-[18px] text-sm font-semibold border-b border-gray-200 border-r">
                        <div className="flex items-center space-x-2">
                          <img src={network} alt="Network" />
                          <span>Network</span>
                        </div>
                      </th>
                      <th className="px-[18px] py-[18px] text-sm font-semibold border-b border-gray-200 border-r">
                        <div className="flex items-center space-x-2">
                          <img src={apy} alt="APY" />
                          <span>APY</span>
                        </div>
                      </th>
                      <th className="px-[18px] py-[18px] text-sm font-semibold border-b border-gray-200 border-r">
                        <div className="flex items-center space-x-2">
                          <img src={uptime} alt="Uptime" />
                          <span>Uptime</span>
                        </div>
                      </th>
                      <th className="px-[18px] py-[18px] text-sm font-semibold border-b border-gray-200 border-r">
                        <div className="flex items-center space-x-2">
                          <img src={commission} alt="Commission" />
                          <span>Commission</span>
                        </div>
                      </th>
                      <th className="px-[18px] py-[18px] text-sm font-semibold border-b border-gray-200 border-r">
                        <div className="flex items-center space-x-2">
                          <img src={details} alt="Details & Security" />
                          <span>Details & Security</span>
                        </div>
                      </th>
                      <th className="px-[18px] py-[18px] text-sm font-semibold border-b border-gray-200">
                        <div className="flex items-center space-x-2">
                          <img src={action} alt="Action" />
                          <span>Action</span>
                        </div>
                      </th>
                    </tr>
                  </thead>

                  {/* Table Body */}
                  <tbody className="text-sm text-gray-600">
                    {tableData.map((row, index) => (
                      <tr key={index} className="hover:bg-blue-50">
                        <td className="text-center text-base font-normal leading-[22.4px] text-navy px-4 py-3 border-t border-gray-200 border-r">
                          {row.network}
                        </td>
                        <td className="text-center text-base font-normal leading-[22.4px] text-navy px-4 py-3 border-t border-gray-200 border-r">
                          {row.apy}
                        </td>
                        <td className="text-center text-base font-normal leading-[22.4px] text-navy px-4 py-3 border-t border-gray-200 border-r">
                          {row.uptime}
                        </td>
                        <td className="text-center text-base font-normal leading-[22.4px] text-navy px-4 py-3 border-t border-gray-200 border-r">
                          {row.commission}
                        </td>
                        <td className="text-center text-base font-normal leading-[22.4px] text-navy px-4 py-3 border-t w-[251px] h-[110px] border-gray-200 border-r">
                          {row.details}
                        </td>
                        <td className="text-center text-base font-normal leading-[22.4px] text-navy px-4 py-3 border-t border-gray-200">
                          <button className="text-blue-500 hover:underline flex justify-center items-center text-base font-bold leading-[25.6px] tracking-[0.2px] text-[#5A4FCF]">
                            {row.action}
                            <img className="ml-2" src={nextArrow} alt="" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* For smaller screens, use card layout */}
              <div className="sm:hidden space-y-4">
                {tableData.map((row, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-md rounded-md p-4 border border-gray-200"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Network:</span>
                      <span>{row.network}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">APY:</span>
                      <span>{row.apy}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Uptime:</span>
                      <span>{row.uptime}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Commission:</span>
                      <span>{row.commission}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Details:</span>
                      <span>{row.details}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Action:</span>
                      <button className="text-blue-500 hover:underline flex items-center font-bold">
                        {row.action}
                        <img className="ml-2" src={nextArrow} alt="" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 4 */}

      <section className="relative w-full border-b border-customGray">
        {/* Background Shadow Images */}
        <div className="relative">
          {/* Left Shadow Image */}
          <div className="absolute top-0 left-0 w-[300px] h-auto rounded-[16px] z-10 pointer-events-none">
            <img
              className="h-full w-full object-cover"
              src={leftimage}
              alt="Background Glow on Left"
            />
          </div>

          {/* Right Shadow Image */}
          <div className="absolute top-[1250px] right-0 w-[300px] h-auto rounded-[16px] z-10 pointer-events-none">
            <img
              className="h-full w-full object-cover"
              src={rightimage}
              alt="Background Glow on Right"
            />
          </div>
        </div>

        {/* Main Content Section */}
        <div className="relative">
          <div className="relative mx-0 lg:mx-[100px] px-4 text-sm border-l border-l-customGray border-r border-r-customGray">
            <div className="flex flex-col justify-center items-center h-auto pt-6 z-10">
              {/* Heading */}
              <h1 className=" flex flex-wrap justify-center items-center font-orbitron text-[40px] sm:leading-[40px] leading-[64px] font-bold text-center text-navy lg:pt-[130px] sm:pt-[40px]">
                How
                <span className="gradient-text text-[40px] font-bold ml-2 sm:ml-1">
                  Staking
                </span>
                Works
              </h1>

              {/* Subheading */}
              <span className="gradient-text text-[18px] leading-[25px] font-bold mt-[30px] mb-[30px] text-center">
                Easily Select and Delegate Your Tokens to Trusted Validators
              </span>

              {/* Content Sections */}

              <div className="p-6 max-w-5xl pb-[130px] ">
                {/* Section 1 */}
                <div className="mb-6 bg-indigo-600 text-white  shadow-md rounded-[42px]">
                  <h2 className="text-center text-xl py-5 text-[20px] font-orbitron font-ultrabold leading-8">
                    What is Staking?
                  </h2>
                  <div className=" bg-[#f6f6fc] text-gray-700 p-8 rounded-b-[42px] border border-indigo-600 text-[18px] leading-6 text-center">
                    <p>
                      <strong>Staking</strong> is a way to{" "}
                      <strong>
                        actively participate in securing a Proof-of-Stake (PoS)
                        blockchain network.
                      </strong>{" "}
                      By locking up (or delegating) your tokens to a trusted
                      validator, you contribute to the network’s security and
                      consensus mechanism. In return, you earn{" "}
                      <strong>
                        rewards based on the number of tokens you’ve staked
                      </strong>{" "}
                      and the performance of the network. It’s a form of{" "}
                      <strong>passive income</strong> that not only earns you
                      rewards but also helps decentralized networks grow.
                    </p>
                  </div>
                </div>

                {/* Section 2 */}
                <div className="mb-6 bg-indigo-600 text-white  shadow-md rounded-[42px]">
                  <h2 className="text-center text-xl py-5 text-[20px] font-orbitron font-ultrabold leading-8">
                    Why Stake with Validators?
                  </h2>
                  <div className="bg-[#f6f6fc] text-gray-700 p-8 rounded-b-[42px] border border-indigo-600 text-[18px] leading-6 text-center">
                    <p>
                      <strong>Validators</strong> are the backbone of{" "}
                      <strong>Proof-of-Stake networks</strong>, ensuring
                      transactions are processed correctly and the blockchain
                      remains secure. When you stake with a validator, you are
                      delegating your tokens to help them perform this critical
                      role. In return, you{" "}
                      <strong>
                        earn a portion of the rewards generated by their work.
                      </strong>{" "}
                      The higher the performance of the validator (
                      <strong>measured by uptime and accuracy</strong>), the
                      higher the potential rewards for you.{" "}
                      <strong>
                        Staking with validators is a simple way to earn passive
                        income
                      </strong>{" "}
                      while supporting blockchain ecosystems.
                    </p>
                  </div>
                </div>

                {/* step section */}

                <section className="w-full max-w-5xl mx-auto bg-white  rounded-[42px]  ">
                  {/* Header */}
                  <div className=" bg-indigo-600 text-white   rounded-tr-[42px] rounded-tl-[42px]">
                    <h2 className="text-center text-xl py-5 text-[20px] font-orbitron font-ultrabold leading-8 ">
                      Step-By-Step Guide
                    </h2>
                  </div>

                  {/* step by step start */}
                  <div className="p-8 bg-[#f6f6fc] rounded-b-[42px]">
                    {/* Step 1 */}
                    <div className="flex items-start  p-6 border rounded-[24px] bg-[#FFFFFF]">
                      <div className="flex items-center justify-center w-14 h-14  text-white">
                        <img src={wallet} alt="" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-[18px] font-bold leading-[25.2px]  text-navy">
                          1. Connect Wallet:
                        </h3>
                        <p className="text-[18px] font-normal leading-[28.8px] text-left text-navy">
                          Quick guide on how to connect wallets like MetaMask,
                          Keplr, or Ledger.
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-center items-center py-3">
                      <img src={stepArrow} alt="" />
                    </div>

                    {/* Step 2 */}
                    <div className="flex items-start p-6 border rounded-[24px] bg-[#FFFFFF]">
                      <div className="flex items-center justify-center w-14 h-14  text-white">
                        <img src={validator} alt="" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-[18px] font-bold leading-[25.2px]  text-navy">
                          2. Choose Validator:
                        </h3>
                        <p className="text-[18px] font-normal leading-[28.8px] text-left text-navy">
                          Instructions on how to select a validator from your
                          list.
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-center items-center py-3">
                      <img src={stepArrow} alt="" />
                    </div>

                    {/* Step 3 */}
                    <div className="flex items-start p-6 border rounded-[24px] bg-[#FFFFFF]">
                      <div className="flex items-center justify-center w-14 h-14  text-white">
                        <img src={delegate} alt="" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-[18px] font-bold leading-[25.2px]  text-navy">
                          3. Delegate Tokens:
                        </h3>
                        <p className="text-[18px] font-normal leading-[28.8px] text-left text-navy">
                          Explain the delegation process and how to start
                          earning rewards.
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-center items-center py-3">
                      <img src={stepArrow} alt="" />
                    </div>

                    {/* Step 4 */}
                    <div className="flex items-start p-6 border rounded-[24px] bg-[#FFFFFF]">
                      <div className="flex items-center justify-center w-14 h-14  text-white">
                        <img src={monitor} alt="" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-[18px] font-bold leading-[25.2px]  text-navy">
                          4. Monitor Rewards:
                        </h3>
                        <p className="text-[18px] font-normal leading-[28.8px] text-left text-navy">
                          Guide on how to track and claim staking rewards over
                          time.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*section 5  Securtiy cant trust  */}

      {/* Second Section */}
      <section className="relative w-full  border-b border-customGray">
        {/* Container for the second section */}
        <div className="relative">
          {/* Left Shadow Image */}
          <div className="absolute top-0 left-0 w-[300px] h-auto rounded-[16px] z-5 pointer-events-none">
            <img
              className="h-full w-full object-cover"
              src={leftimage}
              alt="Left Glow"
            />
          </div>

          {/* Right Shadow Image positioned at the bottom-right */}
          <div className="absolute top-[200px] mt-[600px] right-0 w-[300px] h-auto rounded-[16px] z-10 pointer-events-none">
            <img
              className="h-full w-full object-cover"
              src={rightimage}
              alt="Right Glow"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="relative mx-0 lg:mx-[100px] px-4 text-sm border-l border-l-customGray border-r border-r-customGray">
          {/* Add your content here */}
          <div className="flex flex-col justify-center items-center h-auto pt-6 z-10">
            {/* Heading */}
            <h1 className="font-orbitron text-[40px] font-bold leading-[64px] text-center text-navy lg:pt-[130px] sm:pt-[50px]">
              Security You Can
              <span className="gradient-text text-[40px] font-bold ml-3">
                Trust
              </span>
            </h1>

            <span className="gradient-text text-[18px] leading-[25px] font-bold mt-[30px] mb-[30px] text-center">
              Protecting Your Funds with Best-in-Class Security Practices
            </span>

            {/*  gird start here*/}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-[40px] mb-[40px] max-w-5xl mx-auto px-4">
              {/* Row 1, Column 1 */}
              <div className="flex flex-col items-center text-center sm:text-left p-6">
                <div className="mb-6 bg-indigo-600 text-white shadow-md rounded-[42px] w-full">
                  <h2 className="text-center text-xl py-5 text-[20px] font-orbitron font-ultrabold leading-8">
                    Validator Security
                  </h2>
                  <div className="bg-[#f6f6fc] text-gray-700 p-8 rounded-b-[42px] border border-indigo-600 text-[18px] leading-6 text-center">
                    <p>
                      Security is at the core of everything we do. Our
                      validators undergo rigorous audits and are built on
                      industry-leading infrastructure with{" "}
                      <strong>multi-layered security measures.</strong> We use
                      best practices such as{" "}
                      <strong>cold storage for keys</strong>, secure server
                      environments, and constant network monitoring to prevent
                      downtime and mitigate risks. Our nodes are fortified with{" "}
                      <strong>DDoS protection</strong> and redundancy protocols,
                      ensuring your staked assets remain secure. We also
                      maintain a <strong>transparent validator history</strong>{" "}
                      so that you can review our performance and reliability
                      before delegating.
                    </p>
                    <div className="flex flex-col items-center gap-[16px] text-sm text-gray-500 mb-[42px] mt-[15px]">
                      {/* Tag 1 */}
                      <div className="relative p-[1px] rounded-[100px] w-full max-w-[415px]">
                        <div className="absolute inset-0 rounded-[100px] bg-gradient-to-r from-[#0A1F44] via-[#5A4FCF] to-[#40A8C4]"></div>
                        <div className="relative flex items-center justify-center bg-[#FFFFFF] px-[24px] py-[12px] rounded-[100px]">
                          <img
                            src={coldStorage}
                            alt="Secured"
                            className="w-auto h-auto"
                          />
                          <span className="ml-2 text-[18px] font-medium leading-[25.2px] text-navy">
                            Cold Storage For Keys
                          </span>
                        </div>
                      </div>
                      {/* Tag 2 */}
                      <div className="relative p-[1px] rounded-[100px] w-full max-w-[415px]">
                        <div className="absolute inset-0 rounded-[100px] bg-gradient-to-r from-[#0A1F44] via-[#5A4FCF] to-[#40A8C4]"></div>
                        <div className="relative flex items-center justify-center bg-[#FFFFFF] px-[24px] py-[12px] rounded-[100px]">
                          <img
                            src={doos}
                            alt="Security"
                            className="w-auto h-auto"
                          />
                          <span className="ml-1 text-[16px] font-medium leading-[25.2px] text-navy">
                            DDoS Protection And Redundancy
                          </span>
                        </div>
                      </div>
                      {/* Tag 3 */}
                      <div className="relative p-[1px] rounded-[100px] w-full max-w-[415px]">
                        <div className="absolute inset-0 rounded-[100px] bg-gradient-to-r from-[#0A1F44] via-[#5A4FCF] to-[#40A8C4]"></div>
                        <div className="relative flex items-center justify-center bg-[#FFFFFF] px-[24px] py-[12px] rounded-[100px]">
                          <img
                            src={letter}
                            alt="Participation"
                            className="w-auto h-auto"
                          />
                          <span className="ml-2 text-[18px] font-medium leading-[25.2px] text-navy">
                            Transparent Validator History
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 1, Column 2 */}
              <div className="flex flex-col items-center text-center sm:text-left p-6">
                <div className="mb-6 bg-indigo-600 text-white shadow-md rounded-[42px] w-full">
                  <h2 className="text-center text-xl py-5 text-[20px] font-orbitron font-ultrabold leading-8">
                    Monitoring & Alerts
                  </h2>
                  <div className="bg-[#f6f6fc] text-gray-700 p-8 rounded-b-[42px] border border-indigo-600 text-[18px] leading-6 text-center">
                    <p className="lg:h-[336px] sm:h-0">
                      We take node performance seriously. Our advanced
                      monitoring system provides{" "}
                      <strong>real-time tracking</strong> of node health,
                      uptime, and network performance across all supported
                      blockchains. In the rare case of an issue, our{" "}
                      <strong>automated alert system</strong> instantly notifies
                      our technical team, allowing us to resolve problems before
                      they impact your staking rewards. With{" "}
                      <strong>continuous monitoring 24/7</strong>, we ensure
                      optimal performance, so you can stake with peace of mind
                      knowing that your assets are always earning.
                    </p>
                    <div className="flex flex-col items-center gap-[16px] text-sm text-gray-500 mb-[42px] mt-[15px]">
                      {/* Repeated Tags */}
                      {/* Tag 1 */}
                      <div className="relative p-[1px] rounded-[100px] w-full max-w-[415px]">
                        <div className="absolute inset-0 rounded-[100px] bg-gradient-to-r from-[#0A1F44] via-[#5A4FCF] to-[#40A8C4]"></div>
                        <div className="relative flex items-center justify-center bg-[#FFFFFF] px-[24px] py-[12px] rounded-[100px]">
                          <img
                            src={timeReal}
                            alt="Secured"
                            className="w-auto h-auto"
                          />
                          <span className="ml-2 text-[18px] font-medium leading-[25.2px] text-navy">
                          Real-Time Tracking                          </span>
                        </div>
                      </div>
                      {/* Tag 2 */}
                      <div className="relative p-[1px] rounded-[100px] w-full max-w-[415px]">
                        <div className="absolute inset-0 rounded-[100px] bg-gradient-to-r from-[#0A1F44] via-[#5A4FCF] to-[#40A8C4]"></div>
                        <div className="relative flex items-center justify-center bg-[#FFFFFF] px-[24px] py-[12px] rounded-[100px]">
                          <img
                            src={alert}
                            alt="Security"
                            className="w-auto h-auto"
                          />
                          <span className="ml-2 text-[18px] font-medium leading-[25.2px] text-navy">
                          Automated Alert System                          </span>
                        </div>
                      </div>
                      {/* Tag 3 */}
                      <div className="relative p-[1px] rounded-[100px] w-full max-w-[415px]">
                        <div className="absolute inset-0 rounded-[100px] bg-gradient-to-r from-[#0A1F44] via-[#5A4FCF] to-[#40A8C4]"></div>
                        <div className="relative flex items-center justify-center bg-[#FFFFFF] px-[24px] py-[12px] rounded-[100px]">
                          <img
                            src={eye}
                            alt="Participation"
                            className="w-auto h-auto"
                          />
                          <span className="ml-2 text-[18px] font-medium leading-[25.2px] text-navy">
                          24/7 Continuous Monitoring                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 5 FAQ  */}
      {/* First Section */}
      <section className="relative w-full border-b">
        {/* Glowing Shadows */}
        <div className="relative">
          {/* Left Shadow Image */}
          <div className="absolute top-0 left-0 w-[300px] h-auto rounded-[16px] z-5 pointer-events-none">
            <img
              className="h-full w-full object-cover"
              src={leftimage}
              alt="Left Glow"
            />
          </div>

          {/* Right Shadow Image positioned at the bottom-right */}
          <div className="absolute top-[300px] mt-[250px] right-0 w-[300px] h-auto rounded-[16px] z-10 pointer-events-none">
            <img
              className="h-full w-full object-cover"
              src={rightimage}
              alt="Right Glow"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="relative mx-0 lg:mx-[100px] px-4 text-sm border-l border-l-customGray border-r border-r-customGray">
          <div className="flex flex-col justify-center items-center h-auto pt-6 z-10">
            {/* Heading */}
            <h1 className="font-orbitron text-[40px] font-bold leading-[1.5] text-center text-navy lg:pt-[130px] sm:pt-[50px]">
              FAQs
            </h1>

            {/* Subheading */}
            <span className="gradient-text text-[18px] leading-[25px] font-bold mt-[30px] mb-[30px] text-center">
              Everything You Need to Know About Staking
            </span>

            {/* Accordion */}
            <div className="mt-11 w-full max-w-5xl mb-[130px] ">
              {[
                {
                  question: "What is staking?",
                  answer:
                    "Staking is a way to actively participate in securing a Proof-of-Stake (PoS) blockchain network. By locking up (or delegating) your tokens to a trusted validator, you contribute to the network’s security and consensus mechanism. In return, you earn rewards based on the number of tokens you’ve staked and the performance of the network.",
                },
                {
                  question: "How are staking rewards calculated?",
                  answer:
                    "Staking rewards are typically calculated based on the number of tokens staked, the duration of staking, and the network's overall performance. Some platforms also include bonuses for long-term staking.",
                },
                {
                  question: "What happens if a validator goes offline?",
                  answer:
                    "If a validator goes offline, your staking rewards may be reduced, and in some networks, there may be penalties. It's essential to delegate your tokens to a reliable validator to avoid such risks.",
                },
                {
                  question: "Can I unstake my tokens at any time?",
                  answer:
                    "It depends on the blockchain platform. Some platforms allow you to unstake instantly, while others have a lock-up period during which you cannot access your tokens.",
                },
                {
                  question: "Are there any risks involved with staking?",
                  answer:
                    "Yes, risks include market volatility, validator downtime, and lock-up periods. It’s crucial to understand the terms and conditions of staking on your chosen platform.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="mb-4 rounded-[42px] overflow-hidden border border-borderImage "
                >
                  <div
                    className="flex justify-between items-center p-[32px] cursor-pointer bg-[#F6F6FC] transition duration-200 "
                    onClick={() => toggleAccordion(index)}
                  >
                    <h2 className="text-[18px] font-bold leading-[25.2px] text-left text-navy">
                      {item.question}
                    </h2>
                    <span className="text-blue-900">
                      {openIndex === index ? "↑" : "↓"}
                    </span>
                  </div>
                  {openIndex === index && (
                    <div className=" lg:mb-[130px] sm:mb-2 px-[32px] pb-[32px]  text-navy text-[18px] font-normal leading-[28.8px] text-left bg-[#F6F6FC]">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* section 7 */}
      <section className="relative w-full border-b">
        {/* Glowing Shadows */}
        <div className="relative">
          {/* Left Shadow Image */}
          <div className="absolute top-0 left-0 w-[300px] h-auto rounded-[16px] z-5 pointer-events-none">
            <img
              className="h-full w-full object-cover"
              src={leftimage}
              alt="Left Glow"
            />
          </div>

          {/* Right Shadow Image positioned at the bottom-right */}
          <div className="absolute top-[1300px] mt-[250px] right-0 w-[300px] h-auto rounded-[16px] z-10 pointer-events-none">
            <img
              className="h-full w-full object-cover"
              src={rightimage}
              alt="Right Glow"
            />
          </div>
        </div>

        {/* Content Section */}

        <div className="relative mx-0 lg:mx-[100px] px-4 text-sm border-l border-l-customGray border-r border-r-customGray">
          <div className="flex flex-col justify-center items-center h-auto pt-6 z-10">
            {/* Heading */}
            <h1 className="font-orbitron text-[40px] font-bold leading-[1.5] text-center text-navy lg:pt-[130px] sm:pt-[50px]">
              About
              <span className="gradient-text text-[40px] font-bold ml-3">
                Us
              </span>
            </h1>

            {/* Subheading */}
            <span className="gradient-text text-[18px] leading-[25px] font-bold mt-[30px] mb-[30px]">
              Your Trusted Partner in Staking
            </span>

            {/* Accordion */}

            <div className="space-y-8 w-full max-w-5xl mx-auto mb-[130px]">
              {/* <!-- First Card --> */}
              <div className="bg-[#f6f6fc] border rounded-[42px] p-6 shadow-lg block items-center justify-center">
                <div className=" space-x-4 mb-4  justify-center items-center ">
                  {/* <!-- Icon --> */}
                  <div className=" flex justify-center items-center text-white rounded-full p-3">
                    <img src={mission} alt="" />
                  </div>
                  {/* <!-- Title --> */}
                  <h2 className="text-[20px] font-bold leading-[32px] text-center text-navy flex justify-center items-center">
                    Our Mission
                  </h2>
                </div>
                {/* <!-- Content --> */}
                <p className="text-[18px] text-navy font-normal leading-[28.8px] mb-4 flex justify-center items-center text-center">
                  Simplify staking and bring mass adoption closer by offering a
                  secure and user-friendly staking platform.
                </p>
              </div>

              {/* <!-- First Card --> */}
              <div className="bg-[#f6f6fc] border rounded-[42px] p-6 shadow-lg">
                <div className="block items-center justify-center space-x-4 mb-4  lg:pb-[140px] lg:pt-0 pb-[60px] pt-[60px]">
                  {/* <!-- Icon --> */}
                  <div className=" flex justify-center items-center text-white rounded-full p-3">
                    <img src={mission} alt="" />
                  </div>
                  {/* <!-- Title --> */}
                  <h2 className="text-[20px] font-bold leading-[32px] text-center text-navy flex justify-center items-center">
                    Validator Expertise
                  </h2>
                </div>
                {/* <!-- Content --> */}
                <p className="text-[18px] text-navy font-normal leading-[28.8px] mb-4 text-center">
                  Our validators have been securing blockchain networks since
                  the early days of Proof-of-Stake (PoS). Over the years, we’ve
                  gained deep technical knowledge in running nodes across a wide
                  range of networks, from Ethereum to Solana. By operating with
                  high uptime and stability, we’ve established a track record of
                  reliability, contributing to the success of over 20 mainnets
                  and testnets. Our expertise goes beyond basic staking—we
                  actively participate in network governance, upgrades, and
                  security enhancements, ensuring that your delegated tokens are
                  in safe hands.
                </p>
                {/* <!-- Tags --> */}
                <div className="flex flex-wrap lg:flex-row sm:flex-col sm:gap-4 gap-y-4 justify-center items-center text-center sm:text-center text-sm text-gray-500 mb-[42px] mt-[15px]">
                  {/* Tag 1 */}
                  <div className="relative p-[1px] rounded-[100px]">
                    {/* Gradient Border */}
                    <div className="absolute inset-0 rounded-[100px] bg-gradient-to-r from-[#0A1F44] via-[#5A4FCF] to-[#40A8C4]"></div>
                    {/* Content Inside the Gradient Border */}
                    <div className="relative flex items-center bg-[#FFFFFF] px-[24px] py-[12px] rounded-[100px]">
                      <img
                        src={secured}
                        alt="Secured"
                        className="w-auto h-auto"
                      />
                      <span className="ml-2 text-[18px] font-medium leading-[25.2px] text-navy">
                        20+ Networks Secured
                      </span>
                    </div>
                  </div>

                  {/* Tag 2 */}
                  <div className="relative p-[1px] rounded-[100px]">
                    {/* Gradient Border */}
                    <div className="absolute inset-0 rounded-[100px] bg-gradient-to-r from-[#0A1F44] via-[#5A4FCF] to-[#40A8C4]"></div>
                    {/* Content Inside the Gradient Border */}
                    <div className="relative flex items-center bg-[#FFFFFF] px-[24px] py-[12px] rounded-[100px]">
                      <img
                        src={security}
                        alt="Security"
                        className="w-auto h-auto"
                      />
                      <span className="ml-2 text-[18px] font-medium leading-[25.2px] text-navy">
                        High Uptime & Security
                      </span>
                    </div>
                  </div>

                  {/* Tag 3 */}
                  <div className="relative p-[1px] rounded-[100px]">
                    {/* Gradient Border */}
                    <div className="absolute inset-0 rounded-[100px] bg-gradient-to-r from-[#0A1F44] via-[#5A4FCF] to-[#40A8C4]"></div>
                    {/* Content Inside the Gradient Border */}
                    <div className="relative flex items-center bg-[#FFFFFF] px-[24px] py-[12px] rounded-[100px]">
                      <img
                        src={participation}
                        alt="Participation"
                        className="w-auto h-auto"
                      />
                      <span className="ml-2 text-[18px] font-medium leading-[25.2px] text-navy">
                        Governance Participation
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* second Card */}
              <div className="bg-[#f6f6fc] border rounded-[42px] p-6  max-w-5xl">
                <div className="block items-center justify-center space-x-4 mb-4">
                  {/* icon */}
                  <div className=" text-white flex justify-center items-center rounded-full p-3">
                    <img src={mission} alt="" />
                  </div>
                  {/* title */}
                  <h2 className="text-[20px] font-bold leading-[32px] text-center text-navy flex justify-center items-center">
                    Community Engagement
                  </h2>
                </div>
                {/* content */}
                <p className="text-[18px] text-navy font-normal leading-[28.8px] mb-4 text-center">
                  We believe that staking isn’t just about earning rewards—it’s
                  about building and strengthening the decentralized ecosystem.
                  That’s why we actively engage with the communities of each
                  network we support. Whether it’s running testnets for new
                  projects, contributing to governance proposals, or
                  participating in community discussions, our team is dedicated
                  to supporting the growth and innovation of blockchain
                  technologies. We regularly host webinars, AMAs (Ask Me
                  Anything) sessions, and community outreach programs to help
                  educate both novice and experienced stakers.
                </p>
                {/* <!-- Tags --> */}
                <div className="flex flex-wrap lg:flex-row sm:flex-col sm:gap-4 gap-y-4 justify-center items-center text-center sm:text-center text-sm text-gray-500 mb-[42px] mt-[15px]">
                  {/* Tag 1 */}
                  <div className="relative p-[1px] rounded-[100px]">
                    {/* Gradient Border */}
                    <div className="absolute inset-0 rounded-[100px] bg-gradient-to-r from-[#0A1F44] via-[#5A4FCF] to-[#40A8C4]"></div>
                    {/* Content Inside the Gradient Border */}
                    <div className="relative flex items-center bg-[#FFFFFF] px-[24px] py-[12px] rounded-[100px]">
                      <img
                        src={Decentral}
                        alt="Decentralization"
                        className="w-auto h-auto"
                      />
                      <span className="ml-2 text-[18px] font-medium leading-[25.2px] text-navy">
                        Supporting Decentralization
                      </span>
                    </div>
                  </div>

                  {/* Tag 2 */}
                  <div className="relative p-[1px] rounded-[100px] ">
                    {/* Gradient Border */}
                    <div className="absolute inset-0 rounded-[100px] bg-gradient-to-r from-[#0A1F44] via-[#5A4FCF] to-[#40A8C4]"></div>
                    {/* Content Inside the Gradient Border */}
                    <div className="relative flex items-center bg-[#FFFFFF] px-[24px] py-[12px] rounded-[100px]">
                      <img
                        src={hosting}
                        alt="Hosting"
                        className="w-auto h-auto"
                      />
                      <span className="ml-2 text-[18px] font-medium leading-[25.2px] text-navy">
                        Hosting AMAs & Webinars
                      </span>
                    </div>
                  </div>

                  {/* Tag 3 */}
                  <div className="relative p-[1px] rounded-[100px] ">
                    {/* Gradient Border */}
                    <div className="absolute inset-0 rounded-[100px] bg-gradient-to-r from-[#0A1F44] via-[#5A4FCF] to-[#40A8C4] "></div>
                    {/* Content Inside the Gradient Border */}
                    <div className="relative flex items-center bg-[#FFFFFF] px-[24px] py-[12px] rounded-[100px]">
                      <img
                        src={stakers}
                        alt="Stakers"
                        className="w-auto h-auto"
                      />
                      <span className="ml-2 text-[18px] font-medium leading-[25.2px] text-navy">
                        Educating Stakers
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-8 w-full  sm:pb-[80px] ">
              <div className="gradient-border">
                  <button className="gradient-border-inner shadow-md">
                    Start Staking{" "}
                    <img
                      className="ml-2 w-6 h-6 color"
                      src={nextArrow}
                      alt="button-icon-banner"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* last section */}
      <section className="relative w-full border-b">
        {/* Glowing Shadows */}
        <div className="relative">
          {/* Left Shadow Image */}
          <div className="absolute top-0 left-0 w-[300px] h-auto rounded-[16px] z-5 pointer-events-none">
            <img
              className="h-full w-full object-cover"
              src={leftimage}
              alt="Left Glow"
            />
          </div>

          {/* Right Shadow Image positioned at the bottom-right */}
          <div className="absolute top-[25.5rem] mt-[250px] right-0 w-[300px] h-auto rounded-[16px] z-10 pointer-events-none">
            <img
              className="h-full w-full object-cover"
              src={rightimage}
              alt="Right Glow"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="relative mx-0 lg:mx-[100px]  px-4 text-sm border-l border-l-customGray border-r border-r-customGray">
          <div className="flex flex-col justify-center items-center h-auto  z-10  lg:pb-[140px] lg:pt-0 pb-[60px] pt-[60px]">
            {/* Heading */}
            <h1 className="font-orbitron text-[40px] font-bold leading-[1.5] text-center text-navy lg:pt-[130px] sm:pt-[50px]">
              Contact
              <span className="gradient-text text-[40px] font-bold ml-3">
                Us
              </span>
            </h1>

            {/* Subheading */}
            <span className="gradient-text text-[18px] leading-[25px] font-bold mt-[30px] mb-[30px] text-center">
              We’re here to help—reach out through any channel below!
            </span>

            {/* Form Section */}
            <div className="w-full max-w-5xl bg-[#f6f6fc] rounded-[42px] shadow-lg p-[42px] mt-8 border border-[#B3BAC5]">
              <form>
                {/* Name Input */}
                <div className="mb-6">
                  <label
                    className="block text-navy text-[16px] font-medium leading-[25.2px] mb-2"
                    htmlFor="name"
                  >
                    Your Name*
                  </label>
                  <input
                    className="w-full px-4 py-2 text-[18px] font-normal leading-[28.8px] text-left border border-[#B3BAC5] rounded-[26px] outline-none focus:ring-2 focus:ring-blue-300 h-[50px] placeholder:text-[#B3BAC5] placeholder:text-[18px] placeholder:font-normal placeholder:leading-[28.8px]"
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email Input */}
                <div className="mb-6">
                  <label
                    className="block text-navy text-[16px] font-medium leading-[25.2px] mb-2"
                    htmlFor="email"
                  >
                    Your Email*
                  </label>
                  <input
                    className="w-full px-4 py-2 text-[18px] font-normal leading-[28.8px] text-left border border-[#B3BAC5] rounded-[26px] outline-none focus:ring-2 focus:ring-blue-300 h-[50px] placeholder:text-[#B3BAC5] placeholder:text-[18px] placeholder:font-normal placeholder:leading-[28.8px]"
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Subject Input */}
                <div className="mb-6">
                  <label
                    className="block text-navy text-[16px] font-medium leading-[25.2px] mb-2"
                    htmlFor="subject"
                  >
                    Subject
                  </label>
                  <input
                    className="w-full px-4 py-2 text-[18px] font-normal leading-[28.8px] text-left border border-[#B3BAC5] rounded-[26px] outline-none focus:ring-2 focus:ring-blue-300 h-[50px] placeholder:text-[#B3BAC5] placeholder:text-[18px] placeholder:font-normal placeholder:leading-[28.8px]"
                    type="text"
                    id="subject"
                    placeholder="Enter your subject"
                  />
                </div>

                {/* Message Textarea */}
                <div className="mb-6">
                  <label
                    className="block text-navy text-[16px] font-medium leading-[25.2px] mb-2"
                    htmlFor="message"
                  >
                    Your Message
                  </label>
                  <textarea
                    className="w-full px-4 py-2 text-[18px] font-normal leading-[28.8px] text-left border border-[#B3BAC5] rounded-[26px] outline-none focus:ring-2 focus:ring-blue-300 h-[120px] placeholder:text-[#B3BAC5] placeholder:text-[18px] placeholder:font-normal placeholder:leading-[28.8px]"
                    id="message"
                    placeholder="Enter your message"
                    rows="4"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center flex justify-center items-center">
                  <button
                    type="submit"
                    className="w-full max-w-[130px] px-4 py-2 text-white text-[16px] font-bold leading-[25.6px] tracking-[0.2px] text-center bg-gradient-to-r from-blue-500 to-purple-600 rounded-[40px] hover:opacity-90 transition flex items-center justify-center border border-[#B3BAC5]"
                  >
                    Send
                    <img
                      className="ml-2 w-6 h-6"
                      src={button}
                      alt="button-icon-banner"
                    />
                  </button>
                </div>
              </form>
            </div>

            <div className="relative bg-gradient-to-r from-[#0A1F44] via-[#5A4FCF] to-[#40A8C4] mt-[42px] mb-[140px] sm:mb-5 max-w-5xl w-full rounded-[42px] p-[1px]">
              {/* Inner Content with White Background */}
              <div className="bg-[#f6f6fc] rounded-[42px]">
                <div className="flex flex-wrap justify-center gap-[60px] py-[42px] sm:gap-[20px] sm:py-[20px] items-center">
                  <img
                    className="w-[60px] h-[60px] sm:w-[40px] sm:h-[40px]"
                    src={whatsapp}
                    alt="WhatsApp"
                  />
                  <img
                    className="w-[60px] h-[60px] sm:w-[40px] sm:h-[40px]"
                    src={discord}
                    alt="Discord"
                  />
                  <img
                    className="w-[60px] h-[60px] sm:w-[40px] sm:h-[40px]"
                    src={facebook}
                    alt="Facebook"
                  />
                  <img
                    className="w-[60px] h-[60px] sm:w-[40px] sm:h-[40px]"
                    src={instagram}
                    alt="Instagram"
                  />
                  <img
                    className="w-[60px] h-[60px] sm:w-[40px] sm:h-[40px]"
                    src={linkedin}
                    alt="LinkedIn"
                  />
                  <img
                    className="w-[60px] h-[60px] sm:w-[40px] sm:h-[40px]"
                    src={telegram}
                    alt="Telegram"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
