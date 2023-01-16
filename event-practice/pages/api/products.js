export const Product = {
    get: (id) => {
        return new Promise((resolve, reject) => {
            fetch(`https://meetup-ce29d.firebaseio.com/product/${id}.json`).then((res) => {
                resolve(res.json());
            });
        });
    },
    getAll: () => {
        return new Promise((resolve, reject) => {
            fetch("https://meetup-ce29d.firebaseio.com/product.json")
                .then((res) => {
                    return res.json();
                })
                .then((res) => {
                    let arr = [];
                    for (const key in res) {
                        if (Object.hasOwnProperty.call(res, key)) {
                            const element = res[key];

                            arr.push({
                                id: key,
                                ...element,
                            });
                        }
                    }
                    resolve(arr);
                });
        });
    },
    getByFilter: () => {
        //TODO get by filter
    },
};

export let getAllProduct = () => {
    return new Promise((outerresolve, reject) => {
        fetch("https://meetup-ce29d.firebaseio.com/product.json")
            .then((res) => {
                let res1 = res.json();
                console.log("res", res1);
                outerresolve(res1);
                // return res1;
            })
            .then((res) => {
                console.log("res", res);
                outerresolve(res);
                // return res;
            });
    });
};
