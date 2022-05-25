const User =require("../model/dbmodel")
const { Op } = require("sequelize");
const { v4 } = require("uuid");
const generator = require('generate-password');

exports.getAll = async () => {
    const data = await User.findAll();
    return data;
  };

exports.create = async (data) => {
    const newUser = {
      id: v4(),
      login: data.login,
      password: generator.generate({
        length: 10,
        numbers: true
      }),
      age: data.age,
      isDeleted: false,
    };
    console.log(newUser.id)
    const newdata = await User.create(newUser);
    return newdata;
  };

exports.getUserbyId = async (id) => {
    const user = await User.findByPk(id).then((data) => {
      if (data) {
        return data;
      }
    });
    return user;
  };
exports.getAutoSuggestionList = async (loginSubstring, limit) => {
    const list = await User.findAll({
      where: {
        login: {
          [Op.like]: `%${loginSubstring}%`,
        },
      },
      limit,
    });
    return list;
  };
exports.update = async (uid, newdata) => {
    let updated = {
      id: uid,
      login: newdata.login,
      password: generator.generate({
        length: 10,
        numbers: true
      }),
      isDeleted: false,
    };
    const user = await User.update(updated, {
      where: { id: uid },
    }).then((data) => {
      if (data) {
        return data;
      }
    });
    return updated;
  };
exports.softDelete = async (id) => {
    const user = await User.update({ isdeleted: true }, { where: { id: id } });
    return user;
  };
