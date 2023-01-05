import axios from "axios";

export const data = {
    labels: [],
    datasets: [
        {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: []
        }
    ]
}

export async function fetchComments() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
    const res = response.data
    const arr = []
    let label2 = []
    let data2 = this.data.datasets[0].data;

    res.forEach((el) => {
        const lbl = el.id
        label2.push(lbl)

        this.data.labels = label2;
    })

    res.forEach((el) => {
        const lngth = el.email.indexOf('@')
        arr.push(lngth)

        data2 = arr;

        this.data.datasets[0].data = data2;
    })
}

export const options = {
    responsive: true,
    maintainAspectRatio: false
}
