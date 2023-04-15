//mengkoneksikan index.js dengan express.js
const express = require('express')
const bodyParser = require('body-parser')
const { body } = require('express-validator');
const app = express()
const db = require('./connection/connect')
const session = require('express-session')
const flash = require('req-flash')
// const verifyUser = require('./connection/verifyUser')
const path = require('path')

var router = express.Router();
// //cookie parser
// const cookieParser = require('cookie-parser');
// app.use(cookieParser());

// //argon2
// const argon2 = require('argon2')

// //authentication
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
//body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'));

//express json
app.use(express.json());

//untuk menampilkan file yang bertipe ejs dengan library ejs
app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'ejs');



app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'akuaNakSukakodingdengansegalabahasazxccvbnm,kl;jhgfdsaweru',
    name: 'secretSenaTutor',
    cookie: {
        sameSite: true,
        maxAge: 1200000
    }
}))

app.use(flash())





//routing /
app.get('/login', (req, res, next) => {
    res.render('login/login', { title: 'Express', session: req.session }),
        body('username').notEmpty(),
        body('email').isEmail(),
        body('password').isLength({ min: 8 })
})

//login user dan pengecekan data
app.post('/login_user', (req, res) => {
    let username = req.body.username;
    let password = req.body.password; 
    if (username && password) {
        query = `SELECT * FROM login_siswa WHERE username = "${username}"`;
        db.query(query, (error, data) => {
            if (data.length > 0) {
                for (var i = 0; i > data.length; i++) {
                    if (data[i].kataSandi === password) {
                        // req.session.user_id = data[i].user_id;
                        res.redirect("/")
                    } else {
                        res.send("Incorrect Password")
                    }

                } 
            } else {
                res.send('Incorrect Username')
            //     //  res.redirect('/login')
            }
            res.redirect('/');
        })
    } else {
        console.log("gagal")
        res.send('Please Enter Email Address and Password Details');
        res.end();
    }

    // Replace this with your own authentication logic
    //     if (username === 'admin' && password === 'admin') {
    //       return done(null, { id: 1, username: 'admin' });
    //     } else {
    //       return done(null, false, { message: 'Invalid username or password' });
    //     }
    //   }
});



app.get('/', (req, res) => {

    var sena = [
        { name: 'Example : Sammy', alasan: "Example : Sembahyang ......", Tanggal_dan_waktu: "Example : 01-03-2023, 03.30 WIB" },
        { name: 'Example : Sammy', alasan: "Example : Sembahyang ......", Tanggal_dan_waktu: "Example : 01-03-2023, 03.30 WIB" },
        { name: 'Example : Sammy', alasan: "Example : Sembahyang ......", Tanggal_dan_waktu: "Example : 01-03-2023, 03.30 WIB" },
        { name: 'Example : Sammy', alasan: "Example : Sembahyang ......", Tanggal_dan_waktu: "Example : 01-03-2023, 03.30 WIB" },
    ];
    var tagline = "Aplikasi Bimbingan Konseling Sekolah SMKN 1 ABANG.";

    res.render('pages/index', {
        nama: sena,
        tag: tagline
    })
})

app.get('/home', (req, res) => {

    var sena = [
        { name: 'Example : sena', alasan: "Example : Sembahyang ......", Tanggal_dan_waktu: "Example : 01-03-2023, 03.30 WIB" },
        { name: 'Example : ani', alasan: "Example : Sembahyang ......", Tanggal_dan_waktu: "Example : 01-03-2023, 03.30 WIB" },
        { name: 'Example : nata', alasan: "Example : Sembahyang ......", Tanggal_dan_waktu: "Example : 01-03-2023, 03.30 WIB" },
        { name: 'Example : devi', alasan: "Example : Sembahyang ......", Tanggal_dan_waktu: "Example : 01-03-2023, 03.30 WIB" },
    ];
    var tagline = "Aplikasi Bimbingan Konseling Sekolah SMKN 1 ABANG.";

    res.render('pages/index_home', {
        nama: sena,
        tag: tagline
    })
})

//routing get /about
app.get('/about', (req, res) => {
    res.render('pages/viw')
})




// routing get /login
app.get('/hasil', (q, r) => {
    sql = "SELECT * FROM data_siswa"
    db.query(sql, (error, result) => {
        r.render('./dataSiswa/kelas12', {
            title: 'Data Siswa',
            items: result
        })
        // r.send(result)
    })
})

app.get('/user', (req, res) => {
    res.render('login/login_user1')
})

app.get('/sigup', (req, res) => {
    res.render('sigup/sigup')
})

app.post('/simpan', (req, r) => {
    //Pengecekan Jumlah Data 

    sql = "INSERT INTO login_siswa (user_id, email, username, kataSandi) VALUES (" + req.body.id + ",'" + req.body.email + "','" + req.body.username + "', '" + req.body.katasandi + "')";
    db.query(sql, (error, result) => {
        r.send("Data anda di terima silahkan login dengan mengklik <a href='/login'>disini</a>")
    })
})


//sharing
app.get('/sharing', (q, r) => {
    sql = "SELECT * FROM sharing"
    db.query(sql, (error, result) => {
        r.render('./sharing', {
            items: result
        })
    })
})

app.get('/sharing/pesan', (r, s) => {
    s.render('./sharing/pesan')
})

app.post('/sharing/pesan/simpan', (req, res) => {
    sql = "INSERT INTO sharing (nama, masalah, tanggal, kelas) VALUES ('" + req.body.nama + "','" + req.body.masalah + "','" + req.body.tanggal + "','" + req.body.kelas + "')"
    db.query(sql, (error, result) => {
        res.send("Data anda kami terima silahkan untuk di lihat dengan mengklik <a href='/sharing'>disini</a>")
    })
})

app.get('/sharing/hapus', function (r, s) {
    sql = "Delete from sharing where nama = '" + r.query.nama + "' ";
    db.query(sql, function (e, qry) {
        s.render('./sharing/berhasil')
    })
});


//permision
app.get('/permision', (q, r) => {
    sql = "SELECT * FROM permision"
    db.query(sql, (er, result) => {
        r.render('./permision', {
            isi: result
        })
    })
})

app.get('/permision/surat_ijin/form', (r, s) => {
    s.render('./permision/permisi')
})

app.post('/permision/surat_ijin/form', (req, res) => {
    sql = "INSERT INTO permision (nama, alasan, tanggal, kelas, waktu, alamat, noHP, guruPiket, guruWali) VALUES ('" + req.body.nama + "','" + req.body.alasan + "','" + req.body.tanggal + "','" + req.body.kelas + "', '" + req.body.waktu + "','" + req.body.alamat + "', " + req.body.noHP + ", '" + req.body.guruPiket + "', '" + req.body.guruWali + "')"
    db.query(sql, (error, result) => {
        res.send("Data anda kami terima silahkan untuk di lihat dengan mengklik <a href='/permision'>disini</a>")
    })
})

app.get('/permision/hapus', function (req, res) {
    sql = "select * from permision"
    db.query(sql, (error, result) => {
        db.query("delete from permision where nama ='" + result[0].nama + "'", (er, re) => {
            res.render('./permision/berhasil')
        })
    })
});



//konsultasi
app.get('/konsultasi', (q, r) => {
    sql = "SELECT * FROM konsultasi"
    db.query(sql, (error, result) => {
        r.render('./konsultasi', {
            isi: result
        })
    })
})

app.get('/konsultasi/form', (r, s) => {
    s.render('./konsultasi/konsultasi')
})


app.post('/konsultasi/form/pengajuan', (req, res) => {
    sql = "INSERT INTO konsultasi (nama, masalah, tanggal, kelas, noHP) VALUES ('" + req.body.nama + "','" + req.body.masalah + "','" + req.body.tanggal + "','" + req.body.kelas + "', " + req.body.noHP + ")"
    db.query(sql, (error, result) => {
        res.send("Data anda kami terima silahkan untuk di lihat dengan mengklik <a href='/konsultasi'>disini</a>")
    })
})


app.get('/konsultasi/form/hapus', function (r, s) {
    sql1 = "select * from konsultasi"
    db.query(sql, function (e, qry) {
        db.query(`delete from konsultasi where nama = '${qry[0].nama}'`, (re, res) => {
            s.render('./konsultasi/berhasil')
        })
    })
});


app.get('/logout', function (request, response, next) {

    request.session.destroy();

    response.redirect("/");

});


// definikan port yang akan di jalankan
app.listen(2000, () => {
    console.log('Berjalan pada port 2000')
})


module.exports = router;