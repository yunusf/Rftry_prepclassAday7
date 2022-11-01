let arr_enam = [];
let arr_sepu = ['Meja', 'Buku', 'Topi', 'Baju', 'Kayu'];

function task06() {
    let num = document.getElementById("in_num").value;
    let in_num = document.getElementById("num_in");
    let ex_num = document.getElementById("num_hs");
    let hasil = [];

    arr_enam.push(num);
    
    in_num.innerText = arr_enam;

    for (let i = arr_enam[0]; i <= arr_enam[1]; i++) {
        hasil.push(i);        
    }

    ex_num.innerText = hasil;
}

function task07() {
    let num = document.getElementById("in_num").value;
    let ex_num = document.getElementById("num_hs");
    let hasil = [];

    for (let i = 0; i <= num; i++) {
        if (i % 2 != 0) {
            hasil.push(i);
        } else {
            continue;
        }
    }

    ex_num.innerText = hasil;
}

function task10() {
    let awal = document.getElementById("in_awal").value;
    let akhir = document.getElementById("in_akhir").value;
    let in_kal = document.getElementById("kal_in");
    let ex_kal = document.getElementById("kal_hs");

    in_kal.innerText = ['Meja', 'Buku', 'Topi', 'Baju', 'Kayu'];
    
    if (awal != "" && akhir != "") {
        arr_sepu.unshift(awal);
        arr_sepu.push(akhir);
    } else if (awal != "") {
        arr_sepu.unshift(awal);
    } else if (akhir != "") {
        arr_sepu.push(akhir);
    }

    ex_kal.innerText = arr_sepu;
}

function task11() {
    let arr = ['Jeruk', 'Pepaya', 'Jambu', 'Anggur', 'Melon'];
    let in_kal = document.getElementById("kal_in");
    let ex_kal = document.getElementById("kal_hs");

    in_kal.innerText = arr;
    arr.splice(2, 1);

    ex_kal.innerText = arr;
}

function task14() {
    const people = [
        { id: 1, name: 'Udin', age: 12 },
        { id: 2, name: 'Wati', age: 51 },
        { id: 3, name: 'Budi', age: 34 },
        { id: 4, name: 'Agus', age: 16 },
        { id: 5, name: 'Sari', age: 19 },
        { id: 6, name: 'Ririn', age: 21 },
    ]

    const filterPeople = people.filter((a) => {return a.age < 21 });
    console.log(filterPeople);
}