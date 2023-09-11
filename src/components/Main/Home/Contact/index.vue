<template>
  <div class="my-4">
    <div class="container-lg">
      <div class="title-contact text-center">
        <h2>THÔNG TIN LIÊN HỆ</h2>
      </div>
      <div id="content-contact" class="my-3">
        <div class="row">
          <div class="col-lg-6 col-md-12 col-sm-12 col-12 pb-5">
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14899.140307588894!2d105.79381834999998!3d21.001250700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1681875649951!5m2!1svi!2s"
                width="100%"
                height="200"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12 col-12 pb-5">
            <div class="row" style="padding: 25px 0">
              <div class="pp-contact col-md-6 col-sm-6 col-12 pb-3 d-flex">
                <div class="icon">
                  <div class="icon-inner">
                    <img
                      src="https://zhomestay.vn/wp-content/uploads/2022/11/DonationIcon-400x400.png"
                    />
                  </div>
                </div>
                <div class="text-contact">
                  <div>Thanh Toán</div>
                  <div>Ngân hàng VCB: 0011002380875</div>
                </div>
              </div>
              <div class="pp-contact col-md-6 col-sm-6 col-12 pb-3 d-flex">
                <div class="icon">
                  <div class="icon-inner">
                    <img
                      src="https://zhomestay.vn/wp-content/uploads/2020/02/call.png"
                    />
                  </div>
                </div>
                <div class="text-contact">
                  <div>Hotline Fami Homestay</div>
                  <div>0979533786</div>
                </div>
              </div>
              <div class="pp-contact col-md-6 col-sm-6 col-12 pb-3 d-flex">
                <div class="icon">
                  <div class="icon-inner">
                    <img
                      src="https://zhomestay.vn/wp-content/uploads/2020/02/envelope.png"
                    />
                  </div>
                </div>
                <div class="text-contact">
                  <div>Email</div>
                  <div>giangphongltd@gmail.com</div>
                </div>
              </div>
              <div class="pp-contact col-md-6 col-sm-6 col-12 pb-3 d-flex">
                <div class="icon">
                  <div class="icon-inner">
                    <img
                      src="https://zhomestay.vn/wp-content/uploads/2020/02/company.png"
                    />
                  </div>
                </div>
                <div class="text-contact">
                  <div>Địa chỉ</div>
                  <div>Khu đô thị sinh thái Ecopark</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scope>
.title-contact {
  padding-top: 30px;
  h2 {
    letter-spacing: 0.05em;
    color: #3A5134;
    font-size: 1.5em;
  }
}
.pp-contact {
  .icon {
    width: 20%;
    .icon-inner {
      border: 1px solid #3A5134;
      border-radius: 50%;
      height: 55px;
      width: 55px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 60%;
      }
    }
  }
  &:hover {
    .icon-inner {
      border: 1px solid #3A5134;
      background-color: #3A5134;
    }
  }
}

.text-contact {
  text-align: center;
  color: #3A5134;
  font-size: 0.85em;
  flex: 1 1 0px;
  padding-left: 10px;
}
@media screen and (max-width: 770px) {
  .contact {
    display: none;
  }
}
</style>
