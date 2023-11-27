const RestaurantCard= (props)=>{
    //console.log(props);
    const{resData}= props;
    const{name,cloudinaryImageId,cuisines,avgRating}=resData?.info;
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img className="res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+cloudinaryImageId}/>
            <h4>{name}</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>37 min</h4>
        </div>
    )
}