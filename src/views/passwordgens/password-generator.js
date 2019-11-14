import Swal from 'sweetalert2';
import generatePassword from '../../parsersdata/PasswordParser';
import loggerConsoleLog from '../../parsersdata/Utilans';

export default {
  name: 'password-generator-page',
  data() {
    return {
      stringHasil: '',
      stringPanjangPass: '20',
      numberPanjangPass: 20,
      statusCheckbox: {
        stringStatusUppercase: '1',
        stringStatusLowerCase: '1',
        stringStatusNumber: '1',
        stringStatusSimbol: '1',
      },
      valueStatusCheckbox: {
        numberStatusUppercase: 1,
        numberStatusLowercase: 1,
        numberStatusNumber: 1,
        numberStatusSimbol: 1,
      },
    };
  },
  methods: {
    resetDataPilihan() {
      this.stringHasil = '';
    },
    cekIsianPanjangPassword() {
      if (this.stringPanjangPass) {
        this.numberPanjangPass = Number(this.stringPanjangPass);

        if (this.numberPanjangPass >= 5) {
          this.valueStatusCheckbox.numberStatusUppercase = Number(
            this.statusCheckbox.stringStatusUppercase,
          );

          this.valueStatusCheckbox.numberStatusLowercase = Number(
            this.statusCheckbox.stringStatusLowerCase,
          );

          this.valueStatusCheckbox.numberStatusNumber = Number(
            this.statusCheckbox.stringStatusNumber,
          );

          this.valueStatusCheckbox.numberStatusSimbol = Number(
            this.statusCheckbox.stringStatusSimbol,
          );

          const jumlahPilihan = this.valueStatusCheckbox.numberStatusUppercase
            + this.valueStatusCheckbox.numberStatusLowercase
            + this.valueStatusCheckbox.numberStatusNumber
            + this.valueStatusCheckbox.numberStatusSimbol;

          if (jumlahPilihan > 0) {
            this.kalkulasiPassword();
          }
        } else {
          this.showDialogPeringatanGagal('Masukkan panjang kata sandi dengan benar');
        }
      } else {
        this.showDialogPeringatanGagal('Masukkan panjang kata sandi dengan benar');
      }
    },
    async kalkulasiPassword() {
      const hasilPassword = await new Promise((resolve) => {
        const passwords = generatePassword(this.valueStatusCheckbox.numberStatusLowercase,
          this.valueStatusCheckbox.numberStatusUppercase,
          this.valueStatusCheckbox.numberStatusNumber,
          this.valueStatusCheckbox.numberStatusSimbol,
          this.numberPanjangPass);
        resolve(passwords);
      }).catch((err) => {
        loggerConsoleLog(err);
      });

      if (hasilPassword && hasilPassword.length >= 5) {
        this.stringHasil = hasilPassword;
        this.setHasilPassword();
      }
    },
    setHasilPassword() {
      const resultEl = document.getElementById('result');
      resultEl.innerText = this.stringHasil;
    },
    salinTempelKataSandi() {

    },
    showDialogPeringatanSukses(stringpesan) {
      Swal.fire({
        type: 'success',
        title: 'Berhasil',
        text: stringpesan,
        showConfirmButton: false,
        timer: 1500,
      });
    },
    showDialogPeringatanGagal(stringpesan) {
      Swal.fire({
        type: 'error',
        title: 'Gagal',
        text: stringpesan,
        showConfirmButton: true,
        timer: 5000,
      });
    },
  },
  mounted() {

  },
  beforeDestroy() {

  },
};
