import styled from 'styled-components'

const Section = styled.div`
    margin: 0;
    padding: 0;
    height: 100vh; 
    background-image: linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);
    scroll-snap-align: center; 
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
  `
const Main = styled.div`  
  width: 50%; 
  padding: 20px;
  background-color: aliceblue;
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
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;
`
 

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`

export const StyledButton = styled.button`
  background-color: #ba7ec3;
  color: white;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer; 
  display: flex;
  justify-content: center;
  align-items: center;
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
            <StyledInput type="text" /> 
            <StyledInput type="password" />
          
            <StyledButton type="submit">Login</StyledButton>
          </StyledForm>
        </Right>
      </Main>
    </Section>
  )
}

export default App