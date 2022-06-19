import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./redux/data/dataActions";
import * as s from "./styles/globalStyles";
import styled from "styled-components";

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

export const StyledButton = styled.button`
  background: #72038682;
  box-shadow: 0px 1px 10px #17b2ff;
  color: #ffffff;
  border-radius: 14px;
  padding: 5px 12px;
  font-size: large;
  font-weight: 200;
  }
`;

export const StyledRoundButton = styled.button`
  padding: 10px;
  border-radius: 100%;
  border: none;
  background-color: var(--primary);
  padding: 10px;
  font-weight: bold;
  font-size: 15px;
  color: var(--primary-text);
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const ResponsiveWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretched;
  align-items: stretched;
  width: 100%;
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;

export const StyledLogo = styled.img`
  width: 200px;
  @media (min-width: 767px) {
    width: 300px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;

export const StyledImg = styled.img`
  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);
  border: 4px dashed var(--secondary);
  background-color: var(--accent);
  border-radius: 100%;
  width: 200px;
  @media (min-width: 900px) {
    width: 250px;
  }
  @media (min-width: 1000px) {
    width: 300px;
  }
  transition: width 0.5s;
`;

export const StyledMinImg = styled.img`
  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);
  border: 4px dashed var(--secondary);
  background-color: var(--accent);
  border-radius: 100%;
  width: 50px;
  @media (min-width: 900px) {
    width: 50px;
  }
  @media (min-width: 1000px) {
    width: 50px;
  }
  transition: width 0.5s;
`;

export const StyledLink = styled.a`
  color: var(--secondary);
  text-decoration: none;
`;

function App() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (
    <s.Screen>
      <s.Container
        flex={1}
        ai={"center"}
        style={{ padding: 24, backgroundColor: "var(--primary)" }}
        image={CONFIG.SHOW_BACKGROUND ? "/config/images/bg1.gif" : null}
      >
        <s.TextTitle1
            style={{
              textAlign: "center",
              color: "var(--primary-text)",
              fontFamily: "SF Pro Display",
              fontSize: '25px',
              fontWeight: "800",
            }}
          >
            Welcome to the CRYPTORVERSE. Stake your NFT and get some CRYPTOR.
          </s.TextTitle1>
          <s.TextTitle1
            style={{
              textAlign: "center",
              color: "var(--primary-text)",
              fontFamily: "SF Pro Display",
              fontSize: '25px',
              fontWeight: "600",
            }}
          >
            Choose your collection to start staking:
          </s.TextTitle1>
        <s.SpacerSmall />
        <ResponsiveWrapper flex={1} style={{ padding: 24 }} test>
          <s.Container flex={1} jc={"center"} ai={"center"}>
          </s.Container>
          <s.SpacerLarge />
          <s.Container
            flex={2}
            jc={"center"}
            ai={"center"}
            style={{
              backgroundColor: "var(--accent)",
              padding: 24,
              borderRadius: 24,
              border: "4px dashed var(--secondary)",
              boxShadow: "0px 5px 11px 2px rgba(0,0,0,0.7)",
            }}
          >
            <s.SpacerSmall />
              <>
                <s.TextTitle
                style={{
                  textAlign: "center",
                  color: "var(--primary-text)",
                  fontFamily: "SF Pro Display",
                  fontSize: '25px',
                  fontWeight: "600",
                }}>
                 CRYPTORMAN
                </s.TextTitle>
                <s.SpacerXSmall />
                <s.TextDescription>
                <StyledImg
              alt={"CryptorMan"}
              src={"/config/images/2s.gif"}
              
            /> 
                </s.TextDescription>
                <s.SpacerSmall />
                  <s.Container ai={"center"} jc={"center"}>
                    <s.TextDescription
                      style={{
                        textAlign: "center",
                        color: "var(--accent-text)",
                      }}
                    >
                    </s.TextDescription>
                    <s.SpacerSmall />
                    <StyledButton
                    onClick={(e) => {
                      window.open("https://stake-cryptorman.cryptor.store", "_blank");
                    }}
                    style={{
                      margin: "5px",
                    }}                   
                    >  STAKING
                    </StyledButton>

                    <StyledButton
                    onClick={(e) => {
                      window.open("https://cryptor.store/products/cryptorman-nft", "_blank");
                    }}
                    style={{
                      margin: "5px",
                    }}                   
                    >  BUY IT
                    </StyledButton>
                  </s.Container>
                  <>
                    <s.SpacerSmall />
                  </>
                
              </>
            
            <s.SpacerMedium />
          </s.Container>

          <s.SpacerLarge />
          <s.Container
            flex={2}
            jc={"center"}
            ai={"center"}
            style={{
              backgroundColor: "var(--accent)",
              padding: 24,
              borderRadius: 24,
              border: "4px dashed var(--secondary)",
              boxShadow: "0px 5px 11px 2px rgba(0,0,0,0.7)",
            }}
          >
            <s.SpacerSmall />
              <>
                <s.TextTitle
                style={{
                  textAlign: "center",
                  color: "var(--primary-text)",
                  fontFamily: "SF Pro Display",
                  fontSize: '25px',
                  fontWeight: "600",
                }}>
                 UTILITY NFT
                </s.TextTitle>
                <s.SpacerXSmall />
                <s.TextDescription>
                <StyledImg
              alt={"Utility Cryptor.Store NFT"}
              src={"/config/images/20-off-1.gif"}
              
            /> 
                </s.TextDescription>
                <s.SpacerSmall />
                  <s.Container ai={"center"} jc={"center"}>
                    <s.TextDescription
                      style={{
                        textAlign: "center",
                        color: "var(--accent-text)",
                      }}
                    >
                    </s.TextDescription>
                    <s.SpacerSmall />
                    <StyledButton
                    onClick={(e) => {
                      window.open("https://cruc.cryptor.store/");
                    }}
                    style={{
                      margin: "5px",
                    }}                   
                    >  STAKING
                    </StyledButton>

                    <StyledButton
                    onClick={(e) => {
                      window.open("https://cruc.cryptor.store/");
                    }}
                    style={{
                      margin: "5px",
                    }}                   
                    >  MINT
                    </StyledButton>
                  </s.Container>
                  <>
                    <s.SpacerSmall />
                  </>
                
              </>
            
            <s.SpacerMedium />
          </s.Container>

          <s.SpacerLarge />
          <s.Container
            flex={2}
            jc={"center"}
            ai={"center"}
            style={{
              backgroundColor: "var(--accent)",
              padding: 24,
              borderRadius: 24,
              border: "4px dashed var(--secondary)",
              boxShadow: "0px 5px 11px 2px rgba(0,0,0,0.7)",
            }}
          >
            <s.SpacerSmall />
              <>
                <s.TextTitle
                style={{
                  textAlign: "center",
                  color: "var(--primary-text)",
                  fontFamily: "SF Pro Display",
                  fontSize: '25px',
                  fontWeight: "600",
                }}>
                 10 000 MINT Collection - soon
                </s.TextTitle>
                <s.SpacerXSmall />
                <s.TextDescription>
                <StyledImg
              alt={"MINT NFT Collection"}
              src={"/config/images/mystery-box.png"}
              
            /> 
                </s.TextDescription>
                <s.SpacerSmall />
                  <s.Container ai={"center"} jc={"center"}>
                    <s.TextDescription
                      style={{
                        textAlign: "center",
                        color: "var(--accent-text)",
                      }}
                    >
                    </s.TextDescription>
                    <s.SpacerSmall />
                    <StyledButton
                    onClick={(e) => {
                      window.open("#", "_blank");
                    }}
                    style={{
                      margin: "5px",
                    }}                   
                    >  STAKING
                    </StyledButton>

                    <StyledButton
                    onClick={(e) => {
                      window.open("#", "_blank");
                    }}
                    style={{
                      margin: "5px",
                    }}                   
                    >  BUY IT
                    </StyledButton>
                  </s.Container>
                  <>
                    <s.SpacerSmall />
                  </>
                
              </>
            
            <s.SpacerMedium />
          </s.Container>

          <s.SpacerLarge />
          <s.Container flex={1} jc={"center"} ai={"center"}>
          <s.TextDescription>
                <StyledMinImg
              alt={"CryptorMan"}
              src={"/config/images/faq-logo.png"}
            />
                </s.TextDescription>
                <StyledButton
                    onClick={(e) => {
                      window.open("https://cryptor.store/pages/faq-staking", "_blank");
                    }}
                    style={{
                      margin: "5px",
                    }}                   
                    >FAQ
                  </StyledButton>
                  <s.SpacerSmall />
          <s.SpacerXSmall />
                <s.TextDescription>
                <StyledMinImg
              alt={"CryptorMan"}
              src={"/config/images/twitter-logo.png"}
            />
                </s.TextDescription>
                <StyledButton
                    onClick={(e) => {
                      window.open("https://twitter.com/CryptorStore", "_blank");
                    }}
                    style={{
                      margin: "5px",
                    }}                   
                    >twitter
                  </StyledButton>
                <s.SpacerSmall />

                <s.SpacerXSmall />
                <s.TextDescription>
                <StyledMinImg
              alt={"CryptorMan"}
              src={"/config/images/telegram-logo.png"}
              
            />
            
                </s.TextDescription>
                <StyledButton
                    onClick={(e) => {
                      window.open("https://t.me/cryptorstore/", "_blank");
                    }}
                    style={{
                      margin: "5px",
                    }}                   
                    >telegram
                  </StyledButton>
                <s.SpacerSmall />

                <s.SpacerXSmall />
                <s.TextDescription>
                <StyledMinImg
              alt={"CryptorMan"}
              src={"/config/images/fb-logo.png"}
              
            />
            
                </s.TextDescription>
                <StyledButton
                    onClick={(e) => {
                      window.open("https://www.facebook.com/CryptoR.Store.Global", "_blank");
                    }}
                    style={{
                      margin: "5px",
                    }}                   
                    >facebook
                  </StyledButton>
                <s.SpacerSmall />

                <s.SpacerXSmall />
                <s.TextDescription>
                <StyledMinImg
              alt={"CryptorMan"}
              src={"/config/images/insta-logo.png"}
              
            />
            
                </s.TextDescription>
                <StyledButton
                    onClick={(e) => {
                      window.open("https://www.instagram.com/cryptor.store.global/", "_blank");
                    }}
                    style={{
                      margin: "5px",
                    }}                   
                    >instagram
                  </StyledButton>
                <s.SpacerSmall />
            
          </s.Container>
        </ResponsiveWrapper>
        <s.SpacerMedium />
        <s.Container jc={"center"} ai={"center"} style={{ width: "70%" }}>
        
        </s.Container>
      </s.Container>
    </s.Screen>
  );
}

export default App;
