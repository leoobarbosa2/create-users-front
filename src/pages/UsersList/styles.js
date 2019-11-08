import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  span {
    font-size: 18px;
    margin-left: 10px;
    font-weight: bold;
  }
  `;

export const Container = styled.div`
  max-width: 800px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;

  li{
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    margin: 5px 0px 5px 0px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 5px;

    span {
      display: flex;
      color: #178;
      font-weight: bold;
    }
    
    button {
      background: #fff;
      margin-left: 4px;
      padding: 4px;
      border: 1px solid rgba(0, 0, 0, .7);
      border-radius: 4px;
      
      cursor: pointer;
    }
  }
`;

export const Add = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  
  a {
    text-decoration: none;
    color: #7159c1;
    padding: 6px;

    cursor: pointer;
  }
`;