import React from 'react';
import img from './pexels-eberhard-grossgasteiger-1421903.jpg';


export default function Men() {
  return (
    <div>
      <>
      <div class="small-container">
        <div>
        <div>
        <div className="button">
        <button
          class="btn btn-primary filter"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          Filteroasd
        </button>
        </div>    

        <div
          class="offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">
              Offcanvas
            </h5>
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <div>
              Some text as placeholder. In real life you can have the elements
              you have chosen. Like, text, images, lists, etc.
            </div>
            <div class="dropdown mt-3">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
              >
                Dropdown button
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                  <a class="dropdown-item" href="/men">
                    Man
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/women">
                    Womans
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/children">
                    Children
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
        </div>
        <div>
        <h2 class="title">Featured Products for Mens</h2>
        </div>

        <div class="row">
          <div class="col-4">
            <img src={img} alt="processing...." />
            <h4>Red Printed T-Shirt</h4>

            <p> 499&#8377;</p>
          </div>
          <div class="col-4">
            <img src={img} alt="processing...." />
            <h4>Red Printed T-Shirt</h4>

            <p> 899&#8377;</p>
          </div>
          <div class="col-4">
            <img src={img} alt="processing...." />
            <h4>Red Printed T-Shirt</h4>

            <p> 899&#8377;</p>
          </div>
          <div class="col-4">
            <img src={img} alt="processing...." />
            <h4>Red Printed T-Shirt</h4>

            <p> 649&#8377;</p>
          </div>
          <div class="col-4">
            <img src={img} alt="processing...." />
            <h4>Red Printed T-Shirt</h4>

            <p> 599&#8377;</p>
          </div>
          <div class="col-4">
            <img src={img} alt="processing...." />
            <h4>Red Printed T-Shirt</h4>

            <p> 599&#8377;</p>
          </div>
          <div class="col-4">
            <img src={img} alt="processing...." />
            <h4>Red Printed T-Shirt</h4>

            <p> 599&#8377;</p>
          </div>
          <div class="col-4">
            <img src={img} alt="processing...." />
            <h4>Red Printed T-Shirt</h4>

            <p> 599&#8377;</p>
          </div>
          <div class="col-4">
            <img src={img} alt="processing...." />
            <h4>Red Printed T-Shirt</h4>

            <p> 599&#8377;</p>
          </div>
          <div class="col-4">
            <img src={img} alt="processing...." />
            <h4>Red Printed T-Shirt</h4>

            <p> 599&#8377;</p>
          </div>
          <div class="col-4">
            <img src={img} alt="processing...." />
            <h4>Red Printed T-Shirt</h4>

            <p> 599&#8377;</p>
          </div>
          <div class="col-4">
            <img src={img} alt="processing...." />
            <h4>Red Printed T-Shirt</h4>

            <p> 599&#8377;</p>
          </div>
          <div class="col-4">
            <img src={img} alt="processing...." />
            <h4>Red Printed T-Shirt</h4>

            <p> 599&#8377;</p>
          </div>
          <div class="col-4">
            <img src={img} alt="processing...." />
            <h4>Red Printed T-Shirt</h4>

            <p> 599&#8377;</p>
          </div>
          <div class="col-4">
            <img src={img} alt="processing...." />
            <h4>Red Printed T-Shirt</h4>

            <p> 599&#8377;</p>
          </div>
          <div class="col-4">
            <img src={img} alt="processing...." />
            <h4>Red Printed T-Shirt</h4>

            <p> 599&#8377;</p>
          </div>
        </div>
      </div>

      </>
    </div>
  )
}
