import React from "react";

function SHARE() {
  return (
    <>
      <div
        id="popup-modal"
        tabindex="-1"
        className={`${openShareModal} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full justify-center items-center"
            aria-hidden="true`}
      >
        <div className="relative p-4 w-full max-w-xl h-full md:h-auto">
          <div className="relative bg-blue-500/100 text-white rounded-lg shadow ">
            <div className="text-4xl absolute top-3 right-2.5 text-red-700 bg-transparent hover:bg-red-200 hover:text-white rounded-lg p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white">
              <XCircleIcon onClick={closeModal} className=" w-5 h-5 " />
            </div>
            <h3 class="pt-10 text-center text-xl font-semibold text-gray-900 dark:text-white">
              Share Post :: {receivedTransID}
            </h3>
            <div className="flex   bg-gray-700/50  w-full text-ellipsis overflow-hidden min-w-fit">
              <div className="block">
                {" "}
                <div className={`${pmdx} text-center`}>
                  <FacebookShareButton url={`https://moralis.io/`}>
                    <FacebookIcon
                      size={iconSize}
                      round={iconRound}
                      borderRadius={iconBorderRadius}
                      iconFillColor={iconColor}
                    />
                  </FacebookShareButton>
                </div>
                <div className={`${pmdx} text-center`}>
                  <TwitterShareButton url={`https://moralis.io/`}>
                    <TwitterIcon
                      size={iconSize}
                      round={iconRound}
                      borderRadius={iconBorderRadius}
                      iconFillColor={iconColor}
                    />
                  </TwitterShareButton>
                </div>
                <div className={`${pmdx} text-center`}>
                  <WhatsappShareButton url={`https://moralis.io/`}>
                    <WhatsappIcon
                      size={iconSize}
                      round={iconRound}
                      borderRadius={iconBorderRadius}
                      iconFillColor={iconColor}
                    />
                  </WhatsappShareButton>
                </div>
                <div className={`${pmdx} text-center`}>
                  <TelegramShareButton url={`https://moralis.io/`}>
                    <TelegramIcon
                      size={iconSize}
                      round={iconRound}
                      borderRadius={iconBorderRadius}
                      iconFillColor={iconColor}
                    />
                  </TelegramShareButton>
                </div>
              </div>
              <div className="block">
                {/* okokok   */}
                <div className={`${pmdx} text-center`}>
                  <PinterestShareButton url={`https://moralis.io/`}>
                    <PinterestIcon
                      size={iconSize}
                      round={iconRound}
                      borderRadius={iconBorderRadius}
                      iconFillColor={iconColor}
                    />
                  </PinterestShareButton>
                </div>

                <div className={`${pmdx} text-center`}>
                  <LinkedinShareButton url={`https://moralis.io/`}>
                    <LinkedinIcon
                      size={iconSize}
                      round={iconRound}
                      borderRadius={iconBorderRadius}
                      iconFillColor={iconColor}
                    />
                  </LinkedinShareButton>
                </div>

                <div className={`${pmdx} text-center`}>
                  <ViberShareButton url={`https://moralis.io/`}>
                    <ViberIcon
                      size={iconSize}
                      round={iconRound}
                      borderRadius={iconBorderRadius}
                      iconFillColor={iconColor}
                    />
                  </ViberShareButton>
                </div>

                <div className={`${pmdx} text-center`}>
                  <EmailShareButton url={`https://moralis.io/`}>
                    <EmailIcon
                      size={iconSize}
                      round={iconRound}
                      borderRadius={iconBorderRadius}
                      iconFillColor={iconColor}
                    />
                  </EmailShareButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SHARE;
