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
  `
const Main = styled.div`  
  width: 60%; 
  height: 60vh;
  padding: 20px;
  background-color: #f8f8f863; 
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  `

const Image = styled.img` 
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
  background-color: transparent;
  border: 2px solid #fff;
  color: #fff;
  text-align: center;
  border-radius: 10px;
`

export const StyledButton = styled.button`
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

const App = () => {
  return (
    <Section>
      <Main>
        <Left>
          <Image src="/assets/login.png" />
        </Left>
        <Right>
          <StyledForm >
            <StyledInput type="text" placeholder='Enter Your User Name' />
            <StyledInput type="text" placeholder='Enter Your Password ' />

            <StyledButton type="submit">Login</StyledButton>
          </StyledForm>
        </Right>
      </Main>
    </Section>
  )
}

export default App