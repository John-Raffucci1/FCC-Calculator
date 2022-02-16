import styled from "styled-components";

const Container = styled.div`
  @font-face {
    font-family: "Digital";
    src: url("//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.eot");
    src: url("//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.eot?#iefix")
        format("embedded-opentype"),
      url("//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.woff2")
        format("woff2"),
      url("//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.woff")
        format("woff"),
      url("//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.ttf")
        format("truetype"),
      url("//db.onlinewebfonts.com/t/8e22783d707ad140bffe18b2a3812529.svg#Digital-7")
        format("svg");
  }
  height: 30px;
  padding-bottom: 5px;
  color: white;
  text-align: right;
  font-family: Digital;
  font-size: 30px;
`;
export const Display = (props) => {
  let { displayNum } = props;
  if (displayNum === "") {
    displayNum = "0";
  }
  return (
    <Container className="digital-font" id="display">
      {displayNum}
    </Container>
  );
};
