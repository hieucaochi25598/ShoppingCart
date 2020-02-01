import { TANG_CUOC, GIAM_CUOC, CHOI_GAME } from "../constants/GameBauCua";

const mangXucSac = [
    { ma: 'bau', hinhAnh: './img/bau.PNG' },
    { ma: 'cua', hinhAnh: './img/cua.PNG' },
    { ma: 'tom', hinhAnh: './img/tom.PNG' },
    { ma: 'ca', hinhAnh: './img/ca.PNG' },
    { ma: 'nai', hinhAnh: './img/nai.PNG' },
    { ma: 'ga', hinhAnh: './img/ga.PNG' }
]
const initialValues = {
    tongTien: 100,
    danhSachCuoc: [
        { ma: 'bau', hinhAnh: './img/bau.PNG', diemCuoc: 0 },
        { ma: 'cua', hinhAnh: './img/cua.PNG', diemCuoc: 0 },
        { ma: 'tom', hinhAnh: './img/tom.PNG', diemCuoc: 0 },
        { ma: 'ca', hinhAnh: './img/ca.PNG', diemCuoc: 0 },
        { ma: 'nai', hinhAnh: './img/nai.PNG', diemCuoc: 0 },
        { ma: 'ga', hinhAnh: './img/ga.PNG', diemCuoc: 0 }

    ],
    xucSac: [
        { ma: 'bau', hinhAnh: './img/bau.PNG' },
        { ma: 'bau', hinhAnh: './img/bau.PNG' },
        { ma: 'bau', hinhAnh: './img/bau.PNG' }
    ]
}

const gameBauCuaReducer = (state = initialValues, action) => {
    switch (action.type) {
        case TANG_CUOC: {
            const danhSachCuoc = [...state.danhSachCuoc];
            const index = danhSachCuoc.findIndex(item => item.ma === action.data.ma);
            if (index !== -1) {
                if (state.tongTien > 0) {
                    state.tongTien -= 10
                    danhSachCuoc[index].diemCuoc += 10;
                    // action.data.diemCuoc += 10
                    //     }
                    // }
                }
            }
            return { ...state, danhSachCuoc };
        }
        case GIAM_CUOC: {
            const danhSachCuoc = [...state.danhSachCuoc];
            const index = danhSachCuoc.findIndex(item => item.ma === action.data);
            if (index !== -1)
                if (danhSachCuoc[index].diemCuoc > 0) {
                    state.tongTien += 10
                    danhSachCuoc[index].diemCuoc -= 10;
                }
            return { ...state, danhSachCuoc };
        }
        case CHOI_GAME: {
            let xucSac = []
            for (let i = 0; i < 3; i++) {
                //Min : 0, Max: 5
                const random = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
                xucSac.push(mangXucSac[random]);
            }
            const danhSachDatCuoc = state.danhSachCuoc.filter(item => item.diemCuoc > 0)
            //Xu ly tra lai tien dat cuoc
            for (let item of danhSachDatCuoc) {
                const xucSacTimThay = xucSac.find(xucSac => xucSac.ma === item.ma)
                if (xucSacTimThay) {
                    state.tongTien += item.diemCuoc;
                }
            }
            //Xu ly tra tien thang cuoc
            for (let item of xucSac) {
                const cuoc = danhSachDatCuoc.find(cuoc => cuoc.ma === item.ma)
                if (cuoc) {
                    state.tongTien += cuoc.diemCuoc;
                }
            }
            const danhSachCuoc = state.danhSachCuoc.map(item => ({
                ...item,
                diemCuoc: 0
            }))
            return { ...state, xucSac, danhSachCuoc: danhSachCuoc }
        }
        default:
            return state;
    }
}

export default gameBauCuaReducer;