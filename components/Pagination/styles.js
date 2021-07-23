

const PaginationWrapper = styled.div`
    
    text-align: center;
    margin-top: 56px;
    margin-bottom: 73px;
  
  
  .pagination {
    display: inline-block;
  }
  
  .pagination button {
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color .3s;
    border: 1px solid #ddd;
    margin: 0 4px;
    cursor: pointer;
  }
  
  .pagination button.active {
    background-color: #414ed8;
    color: white;
    border: 1px solid #414ed8;
  }
  .pagination button:disabled{
    cursor: not-allowed;
    color: #ccc;
    opacity: 0.9;
    outline: 0;
  }
  
  .pagination button:hover:not(.active) {background-color: #ddd;}
`