import ShoeItem from "./ShoeItem/ShoeItem";

const ShoeList = (props) => {
    return (
        <div>
          <h2>Shoe List</h2>
          <ul>
            {props.shoes.map((shoe) => (
              <ShoeItem
                key={shoe.id}
                id={shoe.id}
                name={shoe.name}
                description={shoe.description}
                price={shoe.price}
                large={shoe.large}
                medium={shoe.medium}
                small={shoe.small}
              />
            ))}
          </ul>
        </div>
      );
}

export default ShoeList;