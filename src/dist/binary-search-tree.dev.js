"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require("../extensions/index.js"),
    NotImplementedError = _require.NotImplementedError;

var _require2 = require("../extensions/list-tree.js"),
    Node = _require2.Node;
/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */


module.exports =
/*#__PURE__*/
function () {
  function BinarySearchTree() {
    _classCallCheck(this, BinarySearchTree);

    this.treeRoot = null;
  }

  _createClass(BinarySearchTree, [{
    key: "root",
    value: function root() {
      return this.treeRoot;
    }
  }, {
    key: "add",
    value: function add(data) {
      this.treeRoot = addNode(this.treeRoot, data);

      function addNode(node, data) {
        if (!node) {
          return new Node(data);
        }

        if (node.data === data) {
          return node;
        }

        if (data < node.data) {
          node.left = addNode(node.left, data);
        } else {
          node.right = addNode(node.right, data);
        }

        return node;
      }
    }
  }, {
    key: "has",
    value: function has(data) {
      return searchNode(this.treeRoot, data);

      function searchNode(node, data) {
        if (!node) {
          return false;
        }

        if (node.data === data) {
          return true;
        }

        return data < node.data ? searchNode(node.left, data) : searchNode(node.right, data);
      }
    }
  }, {
    key: "find",
    value: function find(data) {
      return findNode(this.treeRoot, data);

      function findNode(node, data) {
        if (node == null) {
          return null;
        }

        if (node.data === data) {
          return node;
        }

        return data < node.data ? findNode(node.left, data) : findNode(node.right, data);
      }
    }
  }, {
    key: "remove",
    value: function remove(data) {
      this.treeRoot = removeNode(this.treeRoot, data);

      function removeNode(node, data) {
        if (!node) {
          return null;
        }

        if (data < node.data) {
          node.left = removeNode(node.left, data);
          return node;
        } else if (data > node.data) {
          node.right = removeNode(node.right, data);
          return node;
        } else {
          if (!node.left && !node.right) {
            return null;
          }

          if (!node.left) {
            node = node.right;
            return node;
          }

          if (!node.right) {
            node = node.left;
            return node;
          }

          var minFromRight = node.right;

          while (minFromRight.left) {
            minFromRight = minFromRight.left;
          }

          node.data = minFromRight.data;
          node.right = removeNode(node.right, minFromRight.data);
          return node;
        }
      }
    }
  }, {
    key: "min",
    value: function min() {
      if (!this.treeRoot) {
        return;
      }

      var node = this.treeRoot;

      while (node.left) {
        node = node.left;
      }

      return node.data;
    }
  }, {
    key: "max",
    value: function max() {
      if (!this.treeRoot) {
        return;
      }

      var node = this.treeRoot;

      while (node.right) {
        node = node.right;
      }

      return node.data;
    }
  }]);

  return BinarySearchTree;
}();