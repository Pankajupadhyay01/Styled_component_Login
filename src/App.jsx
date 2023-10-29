import styled from 'styled-components'

const Section = styled.div`
    margin: 0;
    padding: 0;
    height: 100vh; 
    background-image:linear-gradient(to left bottom, #001738, #121b4b, #2d1c5a, #4b1766, #6a036c);
    scroll-snap-align: center; 
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    overflow: hidden;
  `
const Main = styled.div`  
  width: 60%; 
  height: 60vh;
  padding: 20px;
  background-color: #f8f8f863; 
  display: flex;
  justify-content: space-between;
  align-items: center; 
  flex-direction: column;
  margin: auto;
  overflow: hidden;
  @media screen and (max-width: 600px) {
    width: 80%;
} 
`
const Heading = styled.div`  
font-size: 35px;
color: #fdcc0d;
font-weight: 700;
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  `
const Wrap = styled.button` 
   width: 100%;   
   height: 100%;
  background-color: transparent; 
  display: flex;
  justify-content: space-between;
  align-items: center;  
  border: none;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
} 
`

const Left = styled.div` 
    overflow: hidden; 
    display: flex; 
    height:300px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    flex: 1;
    position: relative;
    border-right: 2px solid white;
    @media screen and (max-width: 1024px) {
    width: 80%;
    height: 100%;
    border: none;
    }

    @media screen and (max-width: 600px) {
    display: none;
    }
  `

const Image = styled.img` 
    width: 100%;
    height:100%;
    position: absolute;
    animation: animate 2s infinite ease alternate;
    @keyframes animate {
        100%{  
            transform: translateY(10px); 
        }
    }
`
const Right = styled.div` 
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;

`

export const StyledForm = styled.form`  
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;
`


export const StyledInput = styled.input`
  width: 280px;
  padding: 10px;
  outline: black;  
  border: 2px solid #fff;
  color: black;
  text-align: center;
  border-radius: 10px; 
  @media screen and (max-width: 600px) {
    width: 200px;
  }
`

const StyledButton = styled.button`
  background: linear-gradient(to left bottom, #001738, #121b4b, #2d1c5a, #4b1766, #6a036c);
  color: white;
  padding: 10px; 
  width: 100px;
  border: none;
  border-radius: 50px;
  cursor: pointer; 
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`

const With = styled.div`
    display: flex;
    justify-content: space-between; 
    align-items: center;
    margin: auto; 
  
`

const Icon = styled.div`
    color: white;
    background-color: black; 
    padding: 12px 12px 12px 12px ;
    border-radius: 50px;
    display: flex; 
    align-items: center;
    text-align: center;
    justify-content: space-between;
    margin-right:10px;
`

const App = () => {
  return (
    <Section>
      <Main>
        <Heading>
          Log in
        </Heading>
        <Wrap>
          <Left>
            <Image src="/assets/login.png" />

          </Left>
          <Right>
            <StyledForm >
              <StyledInput type="text" placeholder='Enter Your User Name' />
              <StyledInput type="text" placeholder='Enter Your Password ' />

              <StyledButton type="submit">Login</StyledButton>
              <With>
                <Icon>
                  Google
                </Icon>
                <Icon>
                  Github
                </Icon>
              </With>
            </StyledForm>
          </Right>
        </Wrap>
      </Main>
    </Section>
  )
}

export default App