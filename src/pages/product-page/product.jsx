import React, { useEffect, useState } from "react";
import "./product.css";
import SHOP_DATA from "../../redux/shop/shop-data";

const Product = (props) => {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    for (let i = 0; i < SHOP_DATA.length; i++) {
      const shop = SHOP_DATA[i];
      const product = shop.items.find(
        (product) => product.id == props.match.params.productId
      );
      if (product) {
        setProduct(product);
        break;
      }
    }
  }, []);
  console.log(product);
  return (
    <div
      style={{
        padding: 10,
        margin: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      {product && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          <div>
            <img
              src={product.imageUrl}
              style={{
                minHeight: 400,
                maxHeight: 400,
                minWidth: 400,
                maxWidth: 400,
                borderRadius: 10,
                border: "2px solid gainsboro",
              }}
            />
          </div>
          <div style={{ marginLeft: 30 }}>
            <div style={{ fontSize: 35 }}> {product.name}</div>
            <div style={{ color: "#777", marginTop: 10 }}>
              Monthly sales: 65
            </div>
            <div style={{ color: "#777", marginTop: 5 }}>Total orders: 325</div>
            <div
              style={{
                color: "darkgreen",
                marginTop: 40,
                fontWeight: "bold",
                fontSize: 25,
              }}
            >
              Price: {product.price}Tk
            </div>
            <div style={{ marginTop: 50, color: "black" }}>Color: Black</div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                minWidth: 420,
                marginTop: 40,
                padding: "20px 10px",
                background: "beige",
                borderRadius: 5,
              }}
            >
              <div>Size</div>
              <div>Price</div>
              <div>Stock</div>
              <div>Quantity</div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                minWidth: 400,

                padding: "20px 20px",
              }}
            >
              <div>S</div>
              <div>30</div>
              <div>1275</div>
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    maxWidth: 60,
                  }}
                >
                  <div
                    style={{
                      border: "1px solid gainsboro",
                      padding: "2px 7px",
                      color: "white",
                      fontWeight: "bold",
                      background: "#005601",
                      borderTopLeftRadius: 4,
                      borderBottomLeftRadius: 4,
                    }}
                  >
                    -
                  </div>
                  <input
                    style={{
                      maxWidth: 30,
                      border: "1px solid gainsboro",
                      textAlign: "center",
                    }}
                    placeholder="0"
                  />
                  <div
                    style={{
                      border: "1px solid gainsboro",
                      padding: "2px 7px",
                      color: "white",
                      fontWeight: "bold",
                      background: "#005601",
                      borderTopRightRadius: 4,
                      borderBottomRightRadius: 4,
                    }}
                  >
                    +
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                minWidth: 400,

                padding: "20px 20px",
              }}
            >
              <div>M</div>
              <div>30</div>
              <div>1605</div>
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    maxWidth: 60,
                  }}
                >
                  <div
                    style={{
                      border: "1px solid gainsboro",
                      padding: "2px 7px",
                      color: "white",
                      fontWeight: "bold",
                      background: "#005601",
                      borderTopLeftRadius: 4,
                      borderBottomLeftRadius: 4,
                    }}
                  >
                    -
                  </div>
                  <input
                    style={{
                      maxWidth: 30,
                      border: "1px solid gainsboro",
                      textAlign: "center",
                    }}
                    placeholder="0"
                  />
                  <div
                    style={{
                      border: "1px solid gainsboro",
                      padding: "2px 7px",
                      color: "white",
                      fontWeight: "bold",
                      background: "#005601",
                      borderTopRightRadius: 4,
                      borderBottomRightRadius: 4,
                    }}
                  >
                    +
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                minWidth: 400,

                padding: "20px 20px",
              }}
            >
              <div>L</div>
              <div>30</div>
              <div>3155</div>
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    maxWidth: 60,
                  }}
                >
                  <div
                    style={{
                      border: "1px solid gainsboro",
                      padding: "2px 7px",
                      color: "white",
                      fontWeight: "bold",
                      background: "#005601",
                      borderTopLeftRadius: 4,
                      borderBottomLeftRadius: 4,
                    }}
                  >
                    -
                  </div>
                  <input
                    style={{
                      maxWidth: 30,
                      border: "1px solid gainsboro",
                      textAlign: "center",
                    }}
                    placeholder="0"
                  />
                  <div
                    style={{
                      border: "1px solid gainsboro",
                      padding: "2px 7px",
                      color: "white",
                      fontWeight: "bold",
                      background: "#005601",
                      borderTopRightRadius: 4,
                      borderBottomRightRadius: 4,
                    }}
                  >
                    +
                  </div>
                </div>
              </div>
            </div>
            <div style={{ marginTop: 50, color: "red" }}>
              Domestic delivery charge inside china: 0
            </div>
            <div style={{ color: "red", fontSize: 12, marginTop: 8 }}>
              * (DDC price may vary inside china)
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ color: "black", fontSize: 17, marginTop: 20 }}>
                Shipping Method:
              </div>
              <div style={{ marginTop: 15, marginLeft: 10 }}>
                <select
                  style={{
                    padding: 5,
                    border: "1px solid gray",
                    borderRadius: 5,
                  }}
                >
                  <option>Ship by Air</option>
                  <option>Ship by Sea</option>
                </select>
              </div>
            </div>
          </div>
          <div
            style={{
              marginLeft: 50,
              minWidth: 280,
            }}
          >
            <div
              style={{
                padding: 35,
                background: "#f6f6f6",
                borderRadius: 10,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{ fontWeight: "bold", textDecoration: "underline" }}
                >
                  0 Pieces
                </div>
                <div
                  style={{ fontWeight: "bold", textDecoration: "underline" }}
                >
                  Tk 0
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 10,
                }}
              >
                <div
                  style={{
                    fontSize: 13,
                  }}
                >
                  Domestic shipping charge
                </div>
                <div style={{}}>Tk 0</div>
              </div>
              <div
                style={{
                  height: 1,
                  width: "100%",
                  marginTop: 15,
                  borderBottom: "1px dashed green",
                }}
              ></div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 10,
                }}
              >
                <div
                  style={{
                    fontSize: 18,
                  }}
                >
                  Total
                </div>
                <div style={{ fontSize: 18 }}>Tk 0</div>
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "red",
                  marginTop: 7,
                  float: "right",
                }}
              >
                *shipping charge will be included later.
              </div>
              <div
                style={{
                  marginTop: 80,
                  background: "#0a5601",
                  padding: "10px",
                  textAlign: "center",
                  color: "white",
                  borderRadius: 10,
                  fontWeight: "bold",
                }}
              >
                Buy now
              </div>
              <div
                style={{
                  marginTop: 20,
                  background: "#0a5601",
                  padding: "10px",
                  textAlign: "center",
                  color: "white",
                  borderRadius: 10,
                  fontWeight: "bold",
                }}
              >
                Add to Cart
              </div>
            </div>
            <div
              style={{
                padding: 35,
                background: "#f6f6f6",
                borderRadius: 10,
                marginTop: 20,
              }}
            >
              <div style={{ fontWeight: "bold" }}> Seller Details</div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 10,
                }}
              >
                <div
                  style={{
                    fontSize: 18,
                  }}
                >
                  Name
                </div>
                <div style={{ fontSize: 18 }}>凯诗琳服装工艺厂</div>
              </div>
              <div
                style={{
                  marginTop: 20,
                  background: "#0a5601",
                  padding: "8px",
                  textAlign: "center",
                  color: "white",
                  borderRadius: 15,
                  fontWeight: "bold",
                }}
              >
                View store
              </div>
            </div>
            <div
              style={{
                padding: 35,
                background: "#f6f6f6",
                borderRadius: 10,
                marginTop: 20,
              }}
            >
              <div style={{ fontWeight: "bold" }}> Gurantee</div>
              <div style={{ marginTop: 10 }}>
                <span style={{ color: "green", fontSize: 20 }}>✔</span> 100%
                Refund{" "}
              </div>
              <div style={{ marginTop: 10 }}>
                <span style={{ color: "green", fontSize: 20 }}>✔</span> Detailed
                inspection{" "}
              </div>
              <div style={{ marginTop: 10 }}>
                <span style={{ color: "green", fontSize: 20 }}>✔</span> Handled
                with care.{" "}
              </div>
              <div style={{ marginTop: 10 }}>
                <span style={{ color: "green", fontSize: 20 }}>✔</span> Lower
                exchange loss{" "}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Product;
