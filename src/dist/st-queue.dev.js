"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require("../extensions/index.js"),
    NotImplementedError = _require.NotImplementedError;

var _require2 = require("../extensions/list-node.js"),
    ListNode = _require2.ListNode;
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the front element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */


module.exports =
/*#__PURE__*/
function () {
  function Queue() {
    _classCallCheck(this, Queue);

    this.head = null;
    this.tail = null;
  }

  _createClass(Queue, [{
    key: "getUnderlyingList",
    value: function getUnderlyingList() {
      if (this.head) {
        return this.head;
      }

      return null;
    }
  }, {
    key: "enqueue",
    value: function enqueue(value) {
      var node = new ListNode(value);

      if (!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        this.tail.next = node;
        this.tail = node;
      }
    }
  }, {
    key: "dequeue",
    value: function dequeue() {
      var item = this.head.value;
      this.head = this.head.next;
      return item;
    }
  }]);

  return Queue;
}();