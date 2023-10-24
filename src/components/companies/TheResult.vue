<template>
    <div class="client-result-wrapper">
        <div class="client-result-copy">
            <h2>With Exceptional Outcomes!</h2>
            <p>Our clients have received job offers from incredible organizations</p>
        </div>
        <section class="client-results container">
            <div class="row">
                <div class="col col-sm-6 col-lg-2 col-md-4">
                    <img src="../../../public/company-logo/google.png" alt="google" loading="lazy">
                </div>
                <div class="col col-sm-6 col-lg-2 col-md-4">
                    <img src="../../../public/company-logo/facebook.png" alt="facebook" loading="lazy">
                </div>
                <div class="col col-sm-6 col-lg-2 col-md-4">
                    <img src="../../../public/company-logo/amazon.png" alt="amazon" loading="lazy">
                </div>
                <div class="col col-sm-6 col-lg-2 col-md-4">
                    <img src="../../../public/company-logo/bloomberg.png" alt="bloomberg" loading="lazy">
                </div>
                <div class="col col-sm-6 col-lg-2 col-md-4">
                    <img src="../../../public/company-logo/microsoft.png" alt="microsoft" loading="lazy">
                </div>
                <div class="col col-sm-6 col-lg-2 col-md-4">
                    <img src="../../../public/company-logo/twosigma.png" alt="twosigma" loading="lazy">
                </div>
            </div>
        </section>
    </div>
</template>
<script></script>
<style lang="scss" scoped>
.client-result-wrapper {
    max-width: 1200px;
    margin: 100px auto;
    text-align: center;

    .client-result-copy {
        text-align: center;
        margin-bottom: 40px;
        h2 {
            font-weight: 700;
            letter-spacing: 0.05em;
            font-size: 2.25rem;
            color: #2c3e50;
        }
        p {
            color: #425466;
            font-size: 1.1rem;
        }
    }
}

.container {
    .row {
        .col {
            text-align: center;
            margin-bottom: 25px;
        }

        align-items: start;

        img {
            width: 70%;
            object-fit: contain;
            object-position: center;
        }
    }
}
</style>