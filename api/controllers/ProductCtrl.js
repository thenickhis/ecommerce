var mongoose = require('mongoose');
var express = require('express');
var Product = require('../models/ProductModel');

module.exports = {
	post: function(req,res) {
		var newProduct = new Product(req.body);
		newProduct.save(function(err,result) {
			if (err) return res.status(500).send(err);
			else res.send(result);
		});
	},
	get: function(req,res) {
		Product.find({},function(err,result) {
			if (err) return res.status(500).send(err);
			else res.send(result);
		});
	},
	productById: function(req,res) {
		Product.find(req.product._id, function(err,result) {
			if (err) return res.status(500).send(err);
			else res.send(result);
		});
	},
	update: function(req,res) {
		Product.findOneAndUpdate(req.params.id, req.body, function(err,result) {
			if (err) return res.status(500).send(err);
			else res.send(result);
		});
	},
	remove: function(req,res) {
		Product.findOneAndRemove(req.product._id, function(err,result) {
			if (err) return res.status(500).send(err);
			else res.send(result);
		});
	}
};