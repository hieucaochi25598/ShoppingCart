const initialValues = {
    danhSachCauHoi: [
        {
          questionType: 1,
          _id: 1,
          content: "Câu hỏi 1 ?",
          answers: [
            {
              _id: "11",
              exact: false,
              content: "Đáp án 1 cho câu 1",
              STT: null
            },
            {
              _id: "12",
              exact: false,
              content: "Đáp án 2 cho câu 1",
              STT: null
            },
            {
              _id: "13",
              exact: false,
              content: "Đáp án 3 cho câu 1",
              STT: null
            },
            {
              _id: "14",
              exact: true,
              content: "Đáp án 4 cho câu 1",
              STT: null
            }
          ]
        },
        {
          questionType: 1,
          _id: 2,
          content: "Câu hỏi 2 ?",
          answers: [
            {
              _id: "21",
              exact: false,
              content: "Đáp án 1 cho câu 2",
              STT: null
            },
            {
              _id: "22",
              exact: false,
              content: "Đáp án 2 cho câu 2",
              STT: null
            },
            {
              _id: "23",
              exact: false,
              content: "Đáp án 3 cho câu 2",
              STT: null
            },
            {
              _id: "24",
              exact: true,
              content: "Đáp án 4 cho câu 2",
              STT: null
            }
          ]
        },
        {
          questionType: 1,
          _id: 3,
          content: "Câu hỏi 3 ?",
          answers: [
            {
              _id: "31",
              exact: false,
              content: "ÄĂ¡p Ă¡n 1 cho cĂ¢u 3",
              STT: null
            },
            {
              _id: "32",
              exact: false,
              content: "ÄĂ¡p Ă¡n 2 cho cĂ¢u 3",
              STT: null
            },
            {
              _id: "33",
              exact: false,
              content: "ÄĂ¡p Ă¡n 3 cho cĂ¢u 3",
              STT: null
            },
            {
              _id: "34",
              exact: true,
              content: "ÄĂ¡p Ă¡n 4 cho cĂ¢u 3",
              STT: null
            }
          ]
        },
        {
          questionType: 1,
          _id: 4,
          content: "Câu hỏi 4 ?",
          answers: [
            {
              _id: "5",
              exact: false,
              content: "ÄĂ¡p Ă¡n 1 cho cĂ¢u 4",
              STT: null
            },
            {
              _id: "9",
              exact: false,
              content: "ÄĂ¡p Ă¡n 2 cho cĂ¢u 4",
              STT: null
            },
            {
              _id: "13",
              exact: false,
              content: "ÄĂ¡p Ă¡n 3 cho cĂ¢u 4",
              STT: null
            },
            {
              _id: "17",
              exact: true,
              content: "ÄĂ¡p Ă¡n 4 cho cĂ¢u 4",
              STT: null
            }
          ]
        },
        {
          questionType: 2,
          _id: 5,
          content: "HĂ£y nháº­p vĂ o Ä‘Ă¡p Ă¡n Ä‘Ăºng",
          answers: [
            {
              _id: "5",
              exact: null,
              content: "ÄĂ¡p Ă¡n 5",
              STT: null
            }
          ]
        },
        {
          questionType: 2,
          _id: 6,
          content: "HĂ£y nháº­p vĂ o Ä‘Ă¡p Ă¡n Ä‘Ăºng",
          answers: [
            {
              _id: "6",
              exact: null,
              content: "ÄĂ¡p Ă¡n 6",
              STT: null
            }
          ]
        },
        {
          questionType: 2,
          _id: 7,
          content: "HĂ£y nháº­p vĂ o Ä‘Ă¡p Ă¡n Ä‘Ăºng",
          answers: [
            {
              _id: "7",
              exact: null,
              content: "ÄĂ¡p Ă¡n 7",
              STT: null
            }
          ]
        },
        {
          questionType: 2,
          _id: 8,
          content: "HĂ£y nháº­p vĂ o Ä‘Ă¡p Ă¡n Ä‘Ăºng",
          answers: [
            {
              _id: "8",
              exact: null,
              content: "ÄĂ¡p Ă¡n 8",
              STT: null
            }
          ]
        }
      ]
}

const baiTapCauHoiReducer = (state = initialValues, action) => {
    switch(action.type) {
        default:
            return state
    }
}

export default baiTapCauHoiReducer