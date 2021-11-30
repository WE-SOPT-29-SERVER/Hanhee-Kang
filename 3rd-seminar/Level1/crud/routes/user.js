const express = require("express");
const responseMessage = require("../constants/responseMessage");
const statusCode = require("../constants/statusCode");
const users = require("../dbMockup/user");
const util = require("../lib/util");
const router = express.Router();

router.post("/singup", async (req, res) => {
  const { id, name, password, email } = req.body;
  if (!id || !name || !password || !email) {
    return res.status(400).send(util.fail(400, "BAD REQUEST"));
  }

  // 해당 email 가진 user가 이미 있을 경우 Already Email 반환
  const alreadyUser = users.filter((user) => user.email === email).length > 0;
  if (alreadyUser) {
    return res.status(409).send(util.fail(409, "ALREADY EMAIL"));
  }

  const newUser = { id, name, password, email };

  users.push(newUser);

  res.status(200).send(util.success(200, "회원가입 성공", newUser));
});

router.post("/login", async (req, res) => {
  // request body에서 데이터 가져오기
  const { email, password } = req.body;
  // request data 확인 -  없다면 Null Value 반환
  if (!email || !password) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  }
  // 존재하는 유저인지 확인 - 없다면 NO user 반환
  const validUser = users.find((user) => user.email === email);
  if (!validUser) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
  }
  // 비밀번호 확인 - 틀렸다면 Missmatch password 반환
  if (validUser.password !== password) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, responseMessage.MISS_MATCH_PW));
  }
  // 성공 - login success와 함께 비밀번호를 제외한 유저 정보 반환
  res.status(statusCode.OK).send(
    util.success(statusCode.OK, responseMessage.LOGIN_SUCCESS, {
      user: {
        id: validUser.id,
        email: validUser.email,
        password: validUser.password,
      },
    })
  );
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { newName } = req.body;

  if (!id || !newName) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  }

  const existingUser = users.filter((user) => user.id === Number(id))[0];

  if (!existingUser) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
  }

  const updatedUser = { ...existingUser, name: newName };

  res
    .status(statusCode.OK)
    .send(
      util.success(
        statusCode.OK,
        responseMessage.USER_UPDATE_SUCCESS,
        updatedUser
      )
    );
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  }

  const existingUser = users.filter((user) => user.id === Number(id))[0];

  if (!existingUser) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
  }

  const newUsers = users.filter((user) => user.id !== Number(id));

  res
    .status(statusCode.OK)
    .send(
      util.success(statusCode.OK, responseMessage.USER_DELETE_SUCCESS, newUsers)
    );
});

router.get("/profile/:id", async (req, res) => {
  // request params에서 데이터 가져오기
  const { id } = req.params;
  console.log(id);
  // 존재하는 아이디인지 확인 - 없다면 No user 반환
  const validId = users.find((user) => user.id === Number(id));
  console.log(validId);
  if (!validId) {
    return res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
  }
  // 성공 - login success와 함께 userId 반환
  res.status(statusCode.OK).send(
    util.success(statusCode.OK, responseMessage.LOGIN_SUCCESS, {
      userId: validId.id,
    })
  );
});

module.exports = router;
