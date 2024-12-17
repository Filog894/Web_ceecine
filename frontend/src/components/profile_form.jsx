function ProfileForm() {
    return (
        <section style={{ transform: "translateY(-100px)", padding: "0 7%" }}>
            <div className="flex cenhor cenver w-100 gap20 mb-30">
                <div className="flex f-col w-100 gap10">
                    <label style={{ color: "white" }}>Họ và tên</label>
                    <input
                        style={{
                            padding: "2%",
                            border: "1px solid transparent",
                            borderRadius: "7px",
                        }}
                        placeholder="Họ tên"
                        className="w-100"
                    />
                </div>
                <div className="flex f-col w-100 gap10">
                    <label style={{ color: "white" }}>Ngày sinh</label>
                    <input
                        style={{
                            padding: "2%",
                            border: "1px solid transparent",
                            borderRadius: "7px",
                        }}
                        type="date"
                        className="w-100"
                    />
                </div>
            </div>

            <div className="flex cenhor cenver w-100 gap20 mb-30">
                <div className="flex f-col w-100 gap10">
                    <label style={{ color: "white" }}>Số điện thoại</label>
                    <input
                        style={{
                            padding: "2%",
                            border: "1px solid transparent",
                            borderRadius: "7px",
                        }}
                        placeholder="Số điện thoại"
                        className="w-100"
                    />
                </div>
                <div className="flex f-col w-100 gap10">
                    <label style={{ color: "white" }}>Email</label>
                    <input
                        style={{
                            padding: "2%",
                            border: "1px solid transparent",
                            borderRadius: "7px",
                        }}
                        placeholder="Email"
                        className="w-100"
                    />
                </div>
            </div>

            <div className="flex cenhor cenver w-100 gap20 mb-30">
                <div className="flex f-col w-100 gap10">
                    <label style={{ color: "white" }}>Giới tính</label>
                    <div className="flex w-100 gap20">
                        <div className="flex gap10">
                            <input type="radio" name="gender" value="male" />
                            <label style={{ color: "white" }}>Nam</label>
                        </div>
                        <div className="flex gap10">
                            <input type="radio" name="gender" value="female" />
                            <label style={{ color: "white" }}>Nữ</label>
                        </div>
                    </div>
                </div>
                <div className="flex f-col w-100 gap10">
                    <label style={{ color: "white" }}>Mật khẩu</label>
                    <input
                        style={{
                            padding: "2%",
                            border: "1px solid transparent",
                            borderRadius: "7px",
                        }}
                        type="password"
                        className="w-100"
                    />
                </div>
            </div>
            <div className="flex cenhor cenver w-100 gap20 mt-50">
                <button className="btn_cus" id="more_films">
                    <p className="text_upper">Cập nhật</p>
                </button>
            </div>
        </section>
    );
}

export default ProfileForm;
