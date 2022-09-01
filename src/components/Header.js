import React from 'react';

function Header() {
    return(
        <header class="bg-success py-5">
            <div class="container px-5">
                <div class="row gx-5 justify-content-center">
                    <div class="col-lg-6">
                        <div class="text-center my-5">
                            <h1 class="display-5 fw-bolder text-white mb-2">Find stats for any sport listed</h1>
                            <p class="lead text-white-50 mb-4">First iteration on displaying sports stats using API calls</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;