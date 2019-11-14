import Swal from 'sweetalert2';
import generatePassword from '../../parsersdata/PasswordParser';
import loggerConsoleLog from '../../parsersdata/Utilans';

export default {
  name: 'password-generator-page',
  data() {
    return {
      stringHasil: '',
      stringPanjangPass: '',
      statusUppercase: '',
      statusLowerCase: '',
      statusNumber: '',
      statusSimbol: '',
    };
  },
  methods: {
    resetDataPilihan() {
      this.stringHasil = '';
    },
    cekIsianPanjangPassword() {
      if (this.stringPanjangPass) {
        const jumlahPass = Number(this.stringPanjangPass);
        if (jumlahPass >= 5) {
          this.kalkulasiPassword();
        } else {
          this.showDialogPeringatanGagal('Masukkan panjang kata sandi dengan benar');
        }
      } else {
        this.showDialogPeringatanGagal('Masukkan panjang kata sandi dengan benar');
      }
    },
    async kalkulasiPassword() {
      const hasilPassword = await new Promise((resolve) => {
        const password = generatePassword(this.statusLowerCase, this.statusUppercase,
          this.statusLowerCase, this.statusSimbol, this.stringPanjangPass);
        resolve(password);
      }).catch((err) => {
        loggerConsoleLog(err);
      });

      if (hasilPassword && hasilPassword.length >= 5) {
        this.stringHasil = hasilPassword;
      }
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
