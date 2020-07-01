<template>
    <div>
        <div class="jumbotron jumbotron-fluid" style="height: 590px;">
            <div class="container">
                <h1 class="display-4">Lorem Ipsum</h1>
                <p class="lead">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </div>
        </div>

        <div class="container-dua">
            <h2 style="text-align: center; padding-top:20px;">Lorem Ipsum?</h2>
                <div class="row">
                    <div class="wrapper-satu">
                        <div class="col-sm wrapper-satu-konten">
                            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </div>
                        <div class="col-sm wrapper-satu-konten">
                            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </div>
                        <div class="col-sm wrapper-satu-konten">
                            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </div>
                    </div>
                </div>
        </div>

        <footer>Copyright</footer>
    </div>
</template>

<style scoped>
    .jumbotron-fluid{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .container-dua{
        width: 100%;
        height: 100%;
        background-color: whitesmoke;
        margin-top: -30px;
    }
    .wrapper-satu{
        width: 100%;
        height: 100%;
        padding: 20px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .wrapper-satu-konten{
        width: 30%;
        height: 50%;
        margin: 20px;
        padding: 20px;
        text-align: left;
        border-radius: 20px;
        box-shadow: 5px 10px #888888;
        background-color: white;
    }
    footer{
        background-color: #142850;
        padding: 10px;
        text-align: center;
        color: white;
    }

</style>
