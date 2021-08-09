<script>
    // import { space } from "svelte/internal";
        let banner_ad = './images/banner_ad.jpg'
        let banner_ad_alt = 'A basket full of love';
    </script>
    
    <main class="main-div">
        <div class="banner-component">
            <img src={banner_ad} alt="{banner_ad_alt}" class="banner-ad">
        </div>
        <div class="text-component">
            <p class="main-title">To stay updated to the app in development, <br />
                <span class="sec-title"> please click the button below to get into our waiting list. </span></p>
        </div>
    
        <div class="btn-component">
            <button class="btn btn-joinwithus">Join with Us</button>
        </div>
    </main>
