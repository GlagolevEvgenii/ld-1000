const embedEngine = {
    init() {
        embedEngine.binds();
    },
    binds() {

        const fileInput = document.getElementById('file');
        const previewHolder = document.querySelector('.preview-holder img');
        const closeBtn = document.querySelector('.close-btn');
        const uploadBtn = document.querySelector('.label-file');
        const submitBtn = document.querySelector('.btn');

        closeBtn.style.display = 'none';


        fileInput.addEventListener('change', function(event) {
            const file = event.target.files[0];

            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    previewHolder.src = e.target.result;
                    closeBtn.style.display = 'inline-block';

                    uploadBtn.classList.add('disabled');
                    fileInput.disabled = true;

                    submitBtn.classList.remove('disabled');
                };
                reader.readAsDataURL(file);
            }
        });

        closeBtn.addEventListener('click', function() {
            previewHolder.src = './img/file-stub.jpg';
            closeBtn.style.display = 'none';
            uploadBtn.classList.remove('disabled');
            fileInput.disabled = false;
            fileInput.value = '';
            submitBtn.classList.add('disabled');
        });

    },
};
document.addEventListener("DOMContentLoaded", embedEngine.init);
